import {
  Category,
  CategoryReference,
  LocalizedString,
  Money,
  PriceDraft,
  Product,
  ProductDraft,
  ProductTypeReference,
  ProductVariant,
  ProductVariantDraft,
  TaxCategoryReference,
} from '@commercetools/platform-sdk';
import { getCategoryById } from './ctp/categories';
import { getFolder, getLimit } from './ctp/config';
import {
  addEntry,
  buildFunctionname,
  buildVariant,
  filterLocalizedString,
  formatLocalizedString,
  prettierMeJson,
  sortObj,
  writeFile,
} from './ctp/helpers';
import { getProducts } from './ctp/products';

const mapVariant = (variant: ProductVariant) => {
  let { id, availability, ...rest } = variant;
  let result: ProductVariantDraft = {
    ...rest,
    prices: rest.prices?.map((value) => {
      let { id, ...priceResult } = value;
      const result: PriceDraft = {
        ...priceResult,
        value: {
          centAmount: priceResult.value.centAmount,
          currencyCode: priceResult.value.currencyCode,
        },
        discounted: undefined,
      };
      return result;
    }),
    assets:
      variant.assets && variant.assets.length > 0 ? variant.assets : undefined,
  };
  return result;
};

const getProductSnapshot = async (product: Product) => {
  const variants = product.masterData.current.variants.map(mapVariant);
  let result: ProductDraft = {
    ...product.masterData.current,
    categories: product.masterData.current.categories.map((value) => {
      return { key: value.obj?.key!, typeId: 'category' };
    }),
    categoryOrderHints:
      product.masterData.current.categoryOrderHints &&
      Object.keys(product.masterData.current.categoryOrderHints).length > 0
        ? product.masterData.current.categoryOrderHints
        : undefined,
    productType: { key: product.productType.obj?.key, typeId: 'product-type' },
    masterVariant: mapVariant(product.masterData.current.masterVariant),
    variants: variants && variants.length > 0 ? variants : undefined,
    metaTitle: filterLocalizedString(product.masterData.current.metaTitle),
    metaDescription: filterLocalizedString(
      product.masterData.current.metaDescription
    ),
    searchKeywords: undefined,
  };

  if (
    product.masterData.current.searchKeywords &&
    Object.keys(product.masterData.current.searchKeywords).length > 0
  ) {
    const keep = Object.values(
      product.masterData.current.searchKeywords
    ).reduce((all, one) => {
      if (Array.isArray(one) && one.length > 0) {
        return true;
      }
      return all;
    }, false);
    if (keep) {
      result = {
        ...result,
        searchKeywords: product.masterData.current.searchKeywords,
      };
    }
  }

  return JSON.stringify(
    sortObj(result as unknown as { [id: string]: unknown }),
    null,
    2
  );
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
    const name = product.key || product.masterData.staged.name['en-GB'];
    const identifier = buildFunctionname(name)!;
    content += `import ${identifier} from './${name}';\n`;
    content += `import productDraft from './${name}.spec.json';\n\n`;
    content += `describe(\`with ${identifier} preset\`, () => {\n`;
    // Rest
    content += `  it(\`should return a ${identifier} preset\`, () => {\n`;
    content += `    const ${identifier}Preset = ${identifier}().build<TProductDraft>();\n`;
    content += `    expect(${identifier}Preset).toMatchObject(productDraft);\n`;
    content += `  });\n`;
    content += `});\n`;

    await writeFile(
      await getProductSnapshot(product),
      'models/product/src/product/product-draft/presets',
      `${name}.spec`,
      'json'
    );
    await writeFile(
      content,
      'models/product/src/product/product-draft/presets',
      `${name}.spec`
    );
  }
};

products().then(() => process.exit());
