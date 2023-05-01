import {
  KeyReference,
  LocalizedString,
} from '@commercetools-test-data/commons';
import { ProductTypeDraft } from '@commercetools-test-data/product-type';
import type { TProductTypeDraft } from '@commercetools-test-data/product-type';
import { ProductVariantDraft } from '@commercetools-test-data/product-variant';
import { TaxCategoryDraft } from '@commercetools-test-data/tax-category';
import type { TTaxCategoryDraft } from '@commercetools-test-data/tax-category';
import * as ProductDraft from '../../../product-draft';
import { TProductDraftBuilder } from '../../../types';

const accessoriesProductTypeDraft = ProductTypeDraft.presets.sampleDataFashion
  .accessories()
  .build<TProductTypeDraft>();

const standardTaxCategoryDraft = TaxCategoryDraft.presets.sampleDataFashion
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const necklace = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .name(LocalizedString.presets.empty()['en-US']('Sample Necklace'))
    .slug(LocalizedString.presets.empty()['en-US']('sample-necklace'))
    .productType(
      KeyReference.presets.productType().key(accessoriesProductTypeDraft.key!)
    )
    .publish(true)
    .masterVariant(
      ProductVariantDraft.presets.sampleDataFashion.necklaceVariant01()
    )
    .variants([
      ProductVariantDraft.presets.sampleDataFashion.necklaceVariant02(),
    ])
    .key('necklace')
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategoryDraft.key!)
    );

export default necklace;
