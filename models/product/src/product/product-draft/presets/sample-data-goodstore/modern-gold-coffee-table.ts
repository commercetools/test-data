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

const modernGoldCoffeeTableProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const tablesDraft = CategoryDraft.presets.sampleDataGoodstore
  .tables()
  .build<TCategoryDraft>();

const livingRoomFurnitureDraft = CategoryDraft.presets.sampleDataGoodstore
  .livingRoomFurniture()
  .build<TCategoryDraft>();

const furnitureDraft = CategoryDraft.presets.sampleDataGoodstore
  .furniture()
  .build<TCategoryDraft>();

const collectionsDraft = CategoryDraft.presets.sampleDataGoodstore
  .collections()
  .build<TCategoryDraft>();

const theModernistDraft = CategoryDraft.presets.sampleDataGoodstore
  .theModernist()
  .build<TCategoryDraft>();

const modernGoldCoffeeTable = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('modern-gold-coffee-table')
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Modern Gold Coffee Table')
        ['de-DE']('Moderner Couchtisch in Gold')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('modern-gold-coffee-table')
        ['de-DE']('moderner-couchtisch-in-gold')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(modernGoldCoffeeTableProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(EU2TaxCategoryDraft.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodstore.modernGoldCoffeeTableVariant01()
    )
    .categories([
      KeyReference.presets.category().key(tablesDraft.key!),
      KeyReference.presets.category().key(livingRoomFurnitureDraft.key!),
      KeyReference.presets.category().key(furnitureDraft.key!),
      KeyReference.presets.category().key(collectionsDraft.key!),
      KeyReference.presets.category().key(theModernistDraft.key!),
    ]);

export default modernGoldCoffeeTable;
