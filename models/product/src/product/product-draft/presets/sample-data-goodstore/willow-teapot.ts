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
import {
  TaxCategoryDraft,
  type TTaxCategoryDraft,
} from '@commercetools-test-data/tax-category';
import * as ProductVariantDraft from '../../../../product-variant/product-variant-draft';
import * as ProductDraft from '../../../product-draft';
import type { TProductDraftBuilder } from '../../../types';

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataGoodStore
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const willowTeapotProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const dinnerwareDraft = CategoryDraft.presets.sampleDataGoodStore
  .dinnerware()
  .build<TCategoryDraft>();

const kitchenDraft = CategoryDraft.presets.sampleDataGoodStore
  .kitchen()
  .build<TCategoryDraft>();

const barAccessoriesDraft = CategoryDraft.presets.sampleDataGoodStore
  .barAccessories()
  .build<TCategoryDraft>();

const barAndGlasswareDraft = CategoryDraft.presets.sampleDataGoodStore
  .barAndGlassware()
  .build<TCategoryDraft>();

const willowTeapot = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('willow-teapot')
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('Willow Teapot')
        ['en-GB']('Willow Teapot')
        ['de-DE']('Willow Teekanne')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-US']('willow-teapot')
        ['en-GB']('willow-teapot')
        ['de-DE']('willow-teekanne')
    )
    .productType(
      KeyReference.presets.productType().key(willowTeapotProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.willowTeapot01()
    )
    .categories([
      KeyReference.presets.category().key(dinnerwareDraft.key!),
      KeyReference.presets.category().key(kitchenDraft.key!),
      KeyReference.presets.category().key(barAccessoriesDraft.key!),
      KeyReference.presets.category().key(barAndGlasswareDraft.key!),
    ]);

export default willowTeapot;
