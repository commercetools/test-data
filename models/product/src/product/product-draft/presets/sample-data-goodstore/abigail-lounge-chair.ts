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
import { ProductDraft } from '../../../';
import { ProductVariantDraft } from '../../../../product-variant';
import type { TProductDraftBuilder } from '../../../types';

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataGoodStore
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const abigailLoungeChairProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const livingRoomFurnitureDraft = CategoryDraft.presets.sampleDataGoodStore
  .livingRoomFurniture()
  .build<TCategoryDraft>();

const furnitureDraft = CategoryDraft.presets.sampleDataGoodStore
  .furniture()
  .build<TCategoryDraft>();

const armchairsDraft = CategoryDraft.presets.sampleDataGoodStore
  .armchairs()
  .build<TCategoryDraft>();

const newArrivalsDraft = CategoryDraft.presets.sampleDataGoodStore
  .newArrivals()
  .build<TCategoryDraft>();

const abigailLoungeChair = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('abigail-lounge-chair')
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Abigail Lounge Chair')
        ['de-DE']('Abigail Lounge-Sessel')
        ['en-US']('Abigail Lounge Chair')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('abigail-lounge-chair')
        ['de-DE']('abigail-lounge-stuhl')
        ['en-US']('abigail-lounge-chair')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(abigailLoungeChairProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.abigailLoungeChair01()
    )
    .categories([
      KeyReference.presets.category().key(livingRoomFurnitureDraft.key!),
      KeyReference.presets.category().key(furnitureDraft.key!),
      KeyReference.presets.category().key(armchairsDraft.key!),
      KeyReference.presets.category().key(newArrivalsDraft.key!),
    ]);

export default abigailLoungeChair;
