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
import { ProductVariantDraft } from '../../../../product-variant/index';
import * as ProductDraft from '../../../product-draft';
import type { TProductDraftBuilder } from '../../../types';

const EU2TaxCategoryDraft = TaxCategoryDraft.presets.sampleDataGoodStore
  .EU2TaxCategory()
  .build<TTaxCategoryDraft>();

const artDecoCoffeTableProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const livingRoomFurnitureDraft = CategoryDraft.presets.sampleDataGoodstore
  .livingRoomFurniture()
  .build<TCategoryDraft>();

const furnitureDraft = CategoryDraft.presets.sampleDataGoodstore
  .furniture()
  .build<TCategoryDraft>();

const tablesDraft = CategoryDraft.presets.sampleDataGoodstore
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
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('art-deco-coffe-table')
        ['de-DE']('art-deco-couchtisch')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(artDecoCoffeTableProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(EU2TaxCategoryDraft.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodstore.artDecoCoffeTableVariant01()
    )
    .categories([
      KeyReference.presets.category().key(livingRoomFurnitureDraft.key!),
      KeyReference.presets.category().key(furnitureDraft.key!),
      KeyReference.presets.category().key(tablesDraft.key!),
    ]);

export default artDecoCoffeTable;
