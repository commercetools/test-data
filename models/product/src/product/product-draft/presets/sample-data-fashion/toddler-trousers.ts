import {
  CategoryDraft,
  TCategoryDraft,
} from '@commercetools-test-data/category';
import {
  KeyReferenceDraft,
  LocalizedStringDraft,
} from '@commercetools-test-data/commons';
import { TBuilder } from '@commercetools-test-data/core';
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
import type { TProductDraft } from '../../../types';

const pantsProductTypeDraft = ProductTypeDraft.presets.sampleDataFashion
  .pants()
  .build<TProductTypeDraft>();

const standardTaxCategoryDraft = TaxCategoryDraft.presets.sampleDataFashion
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const categoryDraft = CategoryDraft.presets.sampleDataFashion
  .bottomsKids()
  .build<TCategoryDraft>();

const ToddlerTrousers = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .name(
      LocalizedStringDraft.presets.empty()['en-US']('Sample Toddler Trousers')
    )
    .slug(
      LocalizedStringDraft.presets.empty()['en-US']('sample-toddler-trousers')
    )
    .productType(
      KeyReferenceDraft.presets.productType().key(pantsProductTypeDraft.key!)
    )
    .publish(true)
    .masterVariant(
      ProductVariantDraft.presets.sampleDataFashion.toddlerTrousersVariant01()
    )
    .variants([
      ProductVariantDraft.presets.sampleDataFashion.toddlerTrousersVariant02(),
      ProductVariantDraft.presets.sampleDataFashion.toddlerTrousersVariant03(),
    ])
    .key('toddler_trousers')
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategoryDraft.key!)
    )
    .categories([KeyReferenceDraft.presets.category().key(categoryDraft.key!)]);

export default ToddlerTrousers;
