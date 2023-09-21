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
  writeFile,
} from './ctp/helpers';
import { getProducts } from './ctp/products';

const getCategories = (categories: CategoryReference[]) => {
  return (
    categories
      .map((category) => {
        return (
          '          {\n' +
          `            "key": "${category.obj?.key}",\n` +
          `            "typeId": "category",\n` +
          '          }'
        );
      })
      .join(',\n') + '\n'
  );
};
const getTaxCategory = (taxCategory?: TaxCategoryReference) => {
  return (
    '        {\n' +
    `          "key": "${taxCategory?.obj?.key}",\n` +
    `          "typeId": "tax-category",\n` +
    '        },\n'
  );
};
const getProductType = (productType?: ProductTypeReference) => {
  return (
    '        {\n' +
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

const getVariantContent = (variant?: ProductVariant) => {
  let content = `          "assets": undefined,\n`;
  content += `          "sku": undefined,\n`;
  content += `          "images": undefined,\n`;
  content += `          "key": undefined,\n`;
  content += `          "prices": undefined,\n`;
  content += `          "attributes": ${JSON.stringify(
    variant?.attributes
  )},\n`;
  return content;
};

const getMasterVariant = (masterVariant?: ProductVariant) => {
  let content = `        "masterVariant": {\n`;
  content += getVariantContent(masterVariant);
  content += `        },\n`;
  return content;
};

const getVariants = (variants: ProductVariant[]) => {
  let content = `        "variants": [\n`;
  content += variants
    .map((variant) => {
      return '        {\n' + getVariantContent(variant) + '        }';
    })
    .join(',\n');
  content += `\n       ]\n`;
  return content;
};

const getProductSnapshot = (product: Product) => {
  let snapshot = `      {\n`;
  snapshot += `        "categories": [\n`;
  snapshot += getCategories(product.masterData.current.categories);
  snapshot += `        ],\n`;
  snapshot += `      "categoryOrderHints": ${JSON.stringify(
    product.masterData.current.categoryOrderHints
  )},\n`;
  snapshot += `      "key": "${product.key}",\n`;
  snapshot += `${getLocalizedString(
    product.masterData.current.description,
    'description',
    '      '
  )}`;
  snapshot += `${getLocalizedString(
    product.masterData.current.metaKeywords,
    'metaKeywords',
    '      '
  )}`;
  snapshot += `${getLocalizedString(
    product.masterData.current.name,
    'name',
    '      '
  )}`;
  snapshot += `${getLocalizedString(
    product.masterData.current.metaTitle,
    'metaTitle',
    '      '
  )}`;
  snapshot += `      "searchKeywords": {},\n`;
  snapshot += `${getLocalizedString(
    product.masterData.current.slug,
    'slug',
    '      '
  )}`;
  snapshot += `      "publish": true,\n`;
  snapshot += `      "priceMode": undefined,\n`;
  snapshot += getTaxCategory(product.taxCategory);
  snapshot += getProductType(product.productType);
  snapshot += getMasterVariant(product.masterData.current.masterVariant);
  snapshot += getVariants(product.masterData.current.variants);
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
    }';\n`;
    content += `describe(\`with ${identifier} preset\`, () => {\n`;
    // Rest
    content += `  it('should return a sample ${identifier} product preset', () => {\n`;
    content += `    const ${identifier}Preset = ${identifier}().build<TProductDraft>();\n`;
    content += `    expect(${identifier}Preset).toMatchInlineSnapshot(\`\n`;
    content += getProductSnapshot(product);

    content += `    \`);\n`;
    content += `  });\n`;
    content += `});\n`;

    console.log(content);

    await writeFile(
      content,
      'models/product/src/product/product-draft/presets',
      `${product.key || product.masterData.staged.name['en-GB']}.spec`
    );
  }
};

products().then(() => process.exit());
