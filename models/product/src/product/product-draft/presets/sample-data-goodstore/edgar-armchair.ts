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

const edgarArmchairProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const newArrivalsDraft = CategoryDraft.presets.sampleDataGoodStore
  .newArrivals()
  .build<TCategoryDraft>();

const furnitureDraft = CategoryDraft.presets.sampleDataGoodStore
  .furniture()
  .build<TCategoryDraft>();

const armchairsDraft = CategoryDraft.presets.sampleDataGoodStore
  .armchairs()
  .build<TCategoryDraft>();

const livingRoomFurnitureDraft = CategoryDraft.presets.sampleDataGoodStore
  .livingRoomFurniture()
  .build<TCategoryDraft>();

const edgarArmchair = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('edgar-armchair')
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('Edgar Armchair')
        ['en-GB']('Edgar Armchair')
        ['de-DE']('Sessel "Edgar"')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-US']('edgar-armchair')
        ['en-GB']('edgar-armchair')
        ['de-DE']('edgar-sessel')
    )
    .productType(
      KeyReference.presets.productType().key(edgarArmchairProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.edgarArmchair01()
    )
    .categories([
      KeyReference.presets.category().key(newArrivalsDraft.key!),
      KeyReference.presets.category().key(furnitureDraft.key!),
      KeyReference.presets.category().key(armchairsDraft.key!),
      KeyReference.presets.category().key(livingRoomFurnitureDraft.key!),
    ]);

export default edgarArmchair;
