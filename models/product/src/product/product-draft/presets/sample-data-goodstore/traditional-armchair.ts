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

const traditionalArmchairProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const livingRoomFurnitureDraft = CategoryDraft.presets.sampleDataGoodStore
  .livingRoomFurniture()
  .build<TCategoryDraft>();

const furnitureDraft = CategoryDraft.presets.sampleDataGoodStore
  .furniture()
  .build<TCategoryDraft>();

const theTraditionalistDraft = CategoryDraft.presets.sampleDataGoodStore
  .theTraditionalist()
  .build<TCategoryDraft>();

const armchairsDraft = CategoryDraft.presets.sampleDataGoodStore
  .armchairs()
  .build<TCategoryDraft>();

const collectionsDraft = CategoryDraft.presets.sampleDataGoodStore
  .collections()
  .build<TCategoryDraft>();

const traditionalArmchair = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('traditional-armchair')
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('Traditional Armchair')
        ['en-GB']('Traditional Armchair')
        ['de-DE']('Traditioneller Sessel')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-US']('traditional-armchair')
        ['en-GB']('traditional-armchair')
        ['de-DE']('traditioneller-sessel')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(traditionalArmchairProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.traditionalArmchair01()
    )
    .categories([
      KeyReference.presets.category().key(livingRoomFurnitureDraft.key!),
      KeyReference.presets.category().key(furnitureDraft.key!),
      KeyReference.presets.category().key(theTraditionalistDraft.key!),
      KeyReference.presets.category().key(armchairsDraft.key!),
      KeyReference.presets.category().key(collectionsDraft.key!),
    ]);

export default traditionalArmchair;
