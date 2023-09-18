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

const standardTaxCategoryDraft = TaxCategoryDraft.presets.sampleDataFashion
  .standardTaxCategory()
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

const barGlasswareDraft = CategoryDraft.presets.sampleDataGoodstore
  .barGlassware()
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
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('willow-teapot')
        ['de-DE']('willow-teekanne')
    )
    .productType(
      KeyReference.presets.productType().key(willowTeapotProductTypeDraft.key!)
    )
    .publish(false)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategoryDraft.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodstore.willowTeapot01()
    )
    .categories([
      KeyReference.presets.category().key(dinnerwareDraft.key!),
      KeyReference.presets.category().key(kitchenDraft.key!),
      KeyReference.presets.category().key(barAccessoriesDraft.key!),
      KeyReference.presets.category().key(barGlasswareDraft.key!),
    ]);

export default willowTeapot;
