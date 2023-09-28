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

const brunoChairProductTypeDraft = ProductTypeDraft.presets.sampleDataGoodStore
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

const brunoChair = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('bruno-chair')
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('Bruno Chair')
        ['en-GB']('Bruno Chair')
        ['de-DE']('Sessel "Bruno"')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-US']('bruno-chair')
        ['en-GB']('bruno-chair')
        ['de-DE']('bruno-stuhl')
    )
    .productType(
      KeyReference.presets.productType().key(brunoChairProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.brunoChair01()
    )
    .categories([
      KeyReference.presets.category().key(furnitureDraft.key!),
      KeyReference.presets.category().key(armchairsDraft.key!),
      KeyReference.presets.category().key(livingRoomFurnitureDraft.key!),
    ]);

export default brunoChair;
