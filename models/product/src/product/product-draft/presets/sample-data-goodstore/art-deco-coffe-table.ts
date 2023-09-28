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

const artDecoCoffeTableProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const livingRoomFurnitureDraft = CategoryDraft.presets.sampleDataGoodStore
  .livingRoomFurniture()
  .build<TCategoryDraft>();

const furnitureDraft = CategoryDraft.presets.sampleDataGoodStore
  .furniture()
  .build<TCategoryDraft>();

const tablesDraft = CategoryDraft.presets.sampleDataGoodStore
  .tables()
  .build<TCategoryDraft>();

const artDecoCoffeTable = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('art-deco-coffe-table')
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Art Deco Coffe Table')
        ['de-DE']('Art-Deco-Couchtisch')
        ['en-US']('Art Deco Coffe Table')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('art-deco-coffe-table')
        ['de-DE']('art-deco-couchtisch')
        ['en-US']('art-deco-coffe-table')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(artDecoCoffeTableProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.artDecoCoffeTable01()
    )
    .categories([
      KeyReference.presets.category().key(livingRoomFurnitureDraft.key!),
      KeyReference.presets.category().key(furnitureDraft.key!),
      KeyReference.presets.category().key(tablesDraft.key!),
    ]);

export default artDecoCoffeTable;
