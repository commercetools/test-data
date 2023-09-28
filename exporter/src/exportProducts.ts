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

const products = async () => {
  const products = await getProducts(getLimit(), 0, [
    'taxCategory',
    'productType',
  ]);
  console.log('Found ' + products.results.length + ' products');

  const header = `import {
CategoryDraft,
TCategoryDraft,
} from '@commercetools-test-data/category';
import {
KeyReference,
LocalizedString,
} from '@commercetools-test-data/commons';
import {
ProductTypeDraft,
type TProductTypeDraft,
} from '@commercetools-test-data/product-type';
import {
TaxCategoryDraft,
type TTaxCategoryDraft,
} from '@commercetools-test-data/tax-category';
import { ProductVariantDraft } from '../../../../product-variant/index';
import * as ProductDraft from '../../../product-draft';
import type { TProductDraftBuilder } from '../../../types';`;

  for (const product of products.results) {
    let content = header;
    const identifier = buildFunctionname(
      product.key || product.masterData.staged.name['en-GB']
    )!;
    const productType = product.productType.obj!;
    const productTypeConstName = identifier + 'ProductTypeDraft';

    let taxcategoryName;

    if (product.taxCategory && product.taxCategory) {
      taxcategoryName = buildFunctionname(
        product.taxCategory?.obj?.key! || product.taxCategory?.obj?.name!
      );
      content +=
        '\n\nconst ' +
        taxcategoryName +
        'Draft = TaxCategoryDraft.presets.sampleDataGoodStore\n' +
        '.' +
        taxcategoryName +
        '()\n' +
        '.build<TTaxCategoryDraft>();\n\n';
    }

    content += `const ${productTypeConstName} = ProductTypeDraft.presets.sampleDataGoodStore
.${buildFunctionname(productType.key!)}()
.build<TProductTypeDraft>();

`;

    const categoryReferences = [];

    for (const category of product.masterData.staged.categories) {
      const loadedCategory = await getCategoryById(category.id);
      const categoryIdentifier =
        loadedCategory.key || loadedCategory.name['en-GB'];
      const categoryFunctionname = buildFunctionname(categoryIdentifier);

      content +=
        'const ' +
        categoryFunctionname +
        'Draft = CategoryDraft.presets.sampleDataGoodstore\n' +
        '.' +
        categoryFunctionname +
        '()\n' +
        '.build<TCategoryDraft>();\n\n';

      categoryReferences.push(categoryFunctionname + 'Draft');
    }

    content +=
      'const ' +
      identifier +
      ' = (): TProductDraftBuilder =>\n' +
      'ProductDraft.presets\n' +
      '  .empty()\n';

    content = addEntry('key', content, product.key, '  ');
    content = addEntry(
      'name',
      content,
      formatLocalizedString(product.masterData.staged.name),
      '  ',
      false
    );
    content = addEntry(
      'slug',
      content,
      formatLocalizedString(product.masterData.staged.slug),
      '  ',
      false
    );
    content +=
      '  .productType(\n' +
      '    KeyReference.presets.productType().key(' +
      productTypeConstName +
      '.key!)\n' +
      '  )\n' +
      '  .publish(true)\n';
    if (taxcategoryName) {
      content +=
        '  .taxCategory(\n' +
        '    KeyReference.presets.taxCategory().key(' +
        taxcategoryName +
        'Draft.key!)\n' +
        '  )\n';
    }
    content +=
      '  .masterVariant(\n' +
      '    ProductVariantDraft.presets.sampleDataGoodStore' +
      '.' +
      buildVariant(identifier, product.masterData.staged.masterVariant.id, '') +
      '()\n' +
      '  )\n';
    if (
      product.masterData.staged.variants &&
      product.masterData.staged.variants.length > 0
    ) {
      content += '  .variants([\n';
      content += product.masterData.staged.variants
        .map((variant) => {
          return (
            '    ProductVariantDraft.presets.sampleDataGoodStore' +
            '.' +
            buildVariant(
              identifier,
              product.masterData.staged.masterVariant.id,
              ''
            ) +
            '(),\n'
          );
        })
        .join('');
      content += '  ])';
    }

    if (categoryReferences.length >= 0) {
      content += '  .categories([\n';
      content += categoryReferences
        .map((item) => {
          return '    KeyReference.presets.category().key(' + item + '.key!)';
        })
        .join(',\n');
      content += '\n    ]);\n';
    }

    content += '\n' + 'export default ' + identifier + ';';

    await writeFile(
      content,
      'models/product/src/product/product-draft/presets',
      product.key || product.masterData.staged.name['en-GB']
    );
  }
};

products().then(() => process.exit());
