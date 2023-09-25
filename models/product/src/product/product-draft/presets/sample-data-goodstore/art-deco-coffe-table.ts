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
import { ProductVariantDraft } from '@commercetools-test-data/product-variant';
import {
  TaxCategoryDraft,
  type TTaxCategoryDraft,
} from '@commercetools-test-data/tax-category';
import * as ProductDraft from '../../../product-draft';
import type { TProductDraftBuilder } from '../../../types';

const vatStandardEuDraft = TaxCategoryDraft.presets.sampleDataGoodstore
  .vatStandardEu()
  .build<TTaxCategoryDraft>();

const artDecoCoffeTableProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodstore
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
      KeyReference.presets.taxCategory().key(vatStandardEuDraft.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodstore.artDecoCoffeTable01()
    )
    .categories([
      KeyReference.presets.category().key(livingRoomFurnitureDraft.key!),
      KeyReference.presets.category().key(furnitureDraft.key!),
      KeyReference.presets.category().key(tablesDraft.key!),
    ]);

export default artDecoCoffeTable;
