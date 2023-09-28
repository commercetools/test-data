import {
  Category,
  CategoryReference,
  LocalizedString,
  Product,
  ProductTypeReference,
  ProductVariant,
  TaxCategoryReference,
} from '@commercetools/platform-sdk';
import { getCategoryById } from './ctp/categories';
import { getFolder, getLimit } from './ctp/config';
import {
  addEntry,
  buildFunctionname,
  buildVariant,
  formatLocalizedString,
  prettierMeJson,
  writeFile,
} from './ctp/helpers';
import { getProducts } from './ctp/products';

const getCategories = (categories: CategoryReference[]) => {
  return categories
    .map((category) => {
      return (
        '          {\n' +
        `            "key": "${category.obj?.key}",\n` +
        `            "typeId": "category",\n` +
        '          },\n'
      );
    })
    .join('');
};
const getTaxCategory = (taxCategory?: TaxCategoryReference) => {
  return (
    '        "taxCategory": {\n' +
    `          "key": "${taxCategory?.obj?.key}",\n` +
    `          "typeId": "tax-category",\n` +
    '        },\n'
  );
};
const getProductType = (productType?: ProductTypeReference) => {
  return (
    '        "productType": {\n' +
    `          "key": "${productType?.obj?.key}",\n` +
    `          "typeId": "product-type",\n` +
    '        },\n'
  );
};

const getLocalizedString = (
  value?: LocalizedString,
  key?: string,
  spaces?: string
) => {
  if (!value) {
    return '';
  }
  return (
    `${spaces}"${key}": {\n` +
    Object.keys(value)
      .map((key) => {
        return `            "${key}": "${value[key]}"`;
      })
      .join(',\n') +
    '\n          },\n'
  );
};

const getVariantContent = async (variant?: ProductVariant) => {
  let content = `          "assets": undefined,\n`;
  content += `          "attributes": ${await prettierMeJson(
    JSON.stringify(variant?.attributes, null, 2)
  )},\n`;
  content += `          "images": ${await prettierMeJson(
    JSON.stringify(variant?.images, null, 2)
  )},\n`;
  content = addEntry('key', content, variant?.key);
  content += `          "sku": undefined,\n`;
  content += `          "prices": ${await prettierMeJson(
    JSON.stringify(
      variant?.prices?.map((value) => {
        const { id, ...rest } = value;
        return rest;
      }),
      null,
      2
    )
  )},\n`;

  return content;
};

const getMasterVariant = async (masterVariant?: ProductVariant) => {
  let content = `        "masterVariant": {\n`;
  content += await getVariantContent(masterVariant);
  content += `        },\n`;
  return content;
};

const getVariants = async (variants: ProductVariant[]) => {
  if (variants.length === 0) {
    return `        "variants": undefined,\n`;
  }
  let content = `        "variants": [\n`;
  content += variants
    .map(async (variant) => {
      return '        {\n' + (await getVariantContent(variant)) + '        }';
    })
    .join(',\n');
  content += `\n       ]\n`;
  return content;
};

const getProductSnapshot = async (product: Product) => {
  let snapshot = `      {\n`;
  snapshot += `        "categories": [\n`;
  snapshot += getCategories(product.masterData.current.categories);
  snapshot += `        ],\n`;
  snapshot += `        "categoryOrderHints": ${
    product.masterData.current.categoryOrderHints &&
    Object.keys(product.masterData.current.categoryOrderHints).length > 0
      ? JSON.stringify(product.masterData.current.categoryOrderHints)
      : undefined
  },\n`;
  snapshot += `${getLocalizedString(
    product.masterData.current.description,
    'description',
    '      '
  )}`;
  snapshot += `        "key": "${product.key}",\n`;
  snapshot += await getMasterVariant(product.masterData.current.masterVariant);
  snapshot += `${getLocalizedString(
    product.masterData.current.metaDescription,
    'metaDescription',
    '      '
  )}`;
  snapshot += `${getLocalizedString(
    product.masterData.current.metaKeywords,
    'metaKeywords',
    '      '
  )}`;
  snapshot += `${getLocalizedString(
    product.masterData.current.metaTitle,
    'metaTitle',
    '      '
  )}`;
  snapshot += `${getLocalizedString(
    product.masterData.current.name,
    'name',
    '      '
  )}`;
  snapshot += `        "priceMode": ${product.priceMode},\n`;
  snapshot += getProductType(product.productType);
  snapshot += `        "publish": true,\n`;
  snapshot += `        "searchKeywords": ${
    product.masterData.current.searchKeywords &&
    Object.keys(product.masterData.current.searchKeywords).length > 0
      ? JSON.stringify(product.masterData.current.searchKeywords)
      : undefined
  },\n`;
  snapshot += `${getLocalizedString(
    product.masterData.current.slug,
    'slug',
    '        '
  )}`;

  snapshot += getTaxCategory(product.taxCategory);
  snapshot += await getVariants(product.masterData.current.variants);
  snapshot += `      }\n`;
  return snapshot;
};

const products = async () => {
  const products = await getProducts(getLimit(), 0, [
    'masterData.current.categories[*]',
    'taxCategory',
    'productType',
  ]);
  console.log('Found ' + products.results.length + ' products');

  const header = "import type { TProductDraft } from '../../../types';\n";

  for (const product of products.results) {
    let content = header;
    const identifier = buildFunctionname(
      product.key || product.masterData.staged.name['en-GB']
    )!;
    content += `import ${identifier} from './${
      product.key || product.masterData.staged.name['en-GB']
    }';\n\n`;
    content += `describe(\`with ${identifier} preset\`, () => {\n`;
    // Rest
    content += `  it(\`should return a ${identifier} preset\`, () => {\n`;
    content += `    const ${identifier}Preset = ${identifier}().build<TProductDraft>();\n`;
    content += `    expect(${identifier}Preset).toMatchInlineSnapshot(\`\n`;
    content += await getProductSnapshot(product);

    content += `    \`);\n`;
    content += `  });\n`;
    content += `});\n`;

    await writeFile(
      content,
      'models/product/src/product/product-draft/presets',
      `${product.key || product.masterData.staged.name['en-GB']}.spec`
    );
  }
};

products().then(() => process.exit());
