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

const vatStandardEuDraft = TaxCategoryDraft.presets.sampleDataGoodstore
  .vatStandardEu()
  .build<TTaxCategoryDraft>();

const willowTeapotProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodstore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const dinnerwareDraft = CategoryDraft.presets.sampleDataGoodstore
  .dinnerware()
  .build<TCategoryDraft>();

const kitchenDraft = CategoryDraft.presets.sampleDataGoodstore
  .kitchen()
  .build<TCategoryDraft>();

const barAccessoriesDraft = CategoryDraft.presets.sampleDataGoodstore
  .barAccessories()
  .build<TCategoryDraft>();

const barAndGlasswareDraft = CategoryDraft.presets.sampleDataGoodstore
  .barAndGlassware()
  .build<TCategoryDraft>();

const willowTeapot = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('willow-teapot')
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Willow Teapot')
        ['de-DE']('Willow Teekanne')
        ['en-US']('Willow Teapot')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('willow-teapot')
        ['de-DE']('willow-teekanne')
        ['en-US']('willow-teapot')
    )
    .productType(
      KeyReference.presets.productType().key(willowTeapotProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(vatStandardEuDraft.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodstore.willowTeapot01()
    )
    .categories([
      KeyReference.presets.category().key(dinnerwareDraft.key!),
      KeyReference.presets.category().key(kitchenDraft.key!),
      KeyReference.presets.category().key(barAccessoriesDraft.key!),
      KeyReference.presets.category().key(barAndGlasswareDraft.key!),
    ]);

export default willowTeapot;