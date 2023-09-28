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

const emeraldVelvetChairProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const furnitureDraft = CategoryDraft.presets.sampleDataGoodStore
  .furniture()
  .build<TCategoryDraft>();

const armchairsDraft = CategoryDraft.presets.sampleDataGoodStore
  .armchairs()
  .build<TCategoryDraft>();

const livingRoomFurnitureDraft = CategoryDraft.presets.sampleDataGoodStore
  .livingRoomFurniture()
  .build<TCategoryDraft>();

const emeraldVelvetChair = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('emerald-velvet-chair')
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('Emerald Velvet Chair')
        ['en-GB']('Emerald Velvet Chair')
        ['de-DE']('Smaragdgrüner Samtstuhl')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-US']('emerald-velvet-chair')
        ['en-GB']('emerald-velvet-chair')
        ['de-DE']('smaragdgrner-samtstuhl')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(emeraldVelvetChairProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.emeraldVelvetChair01()
    )
    .categories([
      KeyReference.presets.category().key(furnitureDraft.key!),
      KeyReference.presets.category().key(armchairsDraft.key!),
      KeyReference.presets.category().key(livingRoomFurnitureDraft.key!),
    ]);

export default emeraldVelvetChair;
