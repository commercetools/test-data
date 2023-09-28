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

const ivoryLoungeChairProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const newArrivalsDraft = CategoryDraft.presets.sampleDataGoodStore
  .newArrivals()
  .build<TCategoryDraft>();

const livingRoomFurnitureDraft = CategoryDraft.presets.sampleDataGoodStore
  .livingRoomFurniture()
  .build<TCategoryDraft>();

const furnitureDraft = CategoryDraft.presets.sampleDataGoodStore
  .furniture()
  .build<TCategoryDraft>();

const armchairsDraft = CategoryDraft.presets.sampleDataGoodStore
  .armchairs()
  .build<TCategoryDraft>();

const ivoryLoungeChair = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('ivory-lounge-chair')
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('Ivory Lounge Chair')
        ['en-GB']('Ivory Lounge Chair')
        ['de-DE']('Elfenbein Lounge Stuhl')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-US']('ivory-lounge-chair')
        ['en-GB']('ivory-lounge-chair')
        ['de-DE']('elfenbein-lounge-stuhl')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(ivoryLoungeChairProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.ivoryLoungeChair01()
    )
    .categories([
      KeyReference.presets.category().key(newArrivalsDraft.key!),
      KeyReference.presets.category().key(livingRoomFurnitureDraft.key!),
      KeyReference.presets.category().key(furnitureDraft.key!),
      KeyReference.presets.category().key(armchairsDraft.key!),
    ]);

export default ivoryLoungeChair;
