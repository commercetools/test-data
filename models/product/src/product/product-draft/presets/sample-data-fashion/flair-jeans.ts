import {
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
import { ProductVariantDraft } from '@commercetools-test-data/product-variant';
import {
  TaxCategoryDraft,
  type TTaxCategoryDraft,
} from '@commercetools-test-data/tax-category';
import * as ProductDraft from '../../../product-draft';
import type { TProductDraftBuilder } from '../../../types';

const pantsProductTypeDraft = ProductTypeDraft.presets.sampleDataFashion
  .pants()
  .build<TProductTypeDraft>();

const standardTaxCategoryDraft = TaxCategoryDraft.presets.sampleDataFashion
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const categoryDraft = CategoryDraft.presets.sampleDataFashion
  .bottomsWomen()
  .build<TCategoryDraft>();

const flairJeans = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .name(LocalizedString.presets.empty()['en-US']('Sample Flair Jeans'))
    .slug(LocalizedString.presets.empty()['en-US']('sample-flair-jeans'))
    .productType(
      KeyReference.presets.productType().key(pantsProductTypeDraft.key!)
    )
    .publish(true)
    .masterVariant(
      ProductVariantDraft.presets.sampleDataFashion.flairJeansVariant01()
    )
    .variants([
      ProductVariantDraft.presets.sampleDataFashion.flairJeansVariant02(),
    ])
    .key('flair_jeans')
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategoryDraft.key!)
    )
    .categories([KeyReference.presets.category().key(categoryDraft.key!)]);

export default flairJeans;
