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
import { ProductVariantDraft } from '../../../../product-variant';
import * as ProductDraft from '../../../product-draft';
import type { TProductDraftBuilder } from '../../../types';

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataGoodStore
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const artDecoCoffeeTableProductTypeDraft =
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

const artDecoCoffeeTable = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('art-deco-coffee-table')
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Art Deco Coffee Table')
        ['de-DE']('Art-Deco-Couchtisch')
        ['en-US']('Art Deco Coffee Table')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('art-deco-coffee-table')
        ['de-DE']('art-deco-couchtisch')
        ['en-US']('art-deco-coffee-table')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(artDecoCoffeeTableProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.artDecoCoffeeTable01()
    )
    .categories([
      KeyReference.presets.category().key(livingRoomFurnitureDraft.key!),
      KeyReference.presets.category().key(furnitureDraft.key!),
      KeyReference.presets.category().key(tablesDraft.key!),
    ]);

export default artDecoCoffeeTable;
