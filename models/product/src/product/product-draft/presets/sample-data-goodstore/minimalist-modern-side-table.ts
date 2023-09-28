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

const minimalistModernSideTableProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const tablesDraft = CategoryDraft.presets.sampleDataGoodStore
  .tables()
  .build<TCategoryDraft>();

const livingRoomFurnitureDraft = CategoryDraft.presets.sampleDataGoodStore
  .livingRoomFurniture()
  .build<TCategoryDraft>();

const furnitureDraft = CategoryDraft.presets.sampleDataGoodStore
  .furniture()
  .build<TCategoryDraft>();

const newArrivalsDraft = CategoryDraft.presets.sampleDataGoodStore
  .newArrivals()
  .build<TCategoryDraft>();

const collectionsDraft = CategoryDraft.presets.sampleDataGoodStore
  .collections()
  .build<TCategoryDraft>();

const theMinimalistDraft = CategoryDraft.presets.sampleDataGoodStore
  .theMinimalist()
  .build<TCategoryDraft>();

const minimalistModernSideTable = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('minimalist-modern-side-table')
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Minimalist Modern Side Table')
        ['de-DE']('Minimalistischer moderner Beistelltisch')
        ['en-US']('Minimalist Modern Side Table')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('minimalist-modern-side-table')
        ['de-DE']('minimalistischer-moderner-beistelltisch')
        ['en-US']('minimalist-modern-side-table')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(minimalistModernSideTableProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.minimalistModernSideTable01()
    )
    .variants([
      ProductVariantDraft.presets.sampleDataGoodStore.minimalistModernSideTable02(),
    ])
    .categories([
      KeyReference.presets.category().key(tablesDraft.key!),
      KeyReference.presets.category().key(livingRoomFurnitureDraft.key!),
      KeyReference.presets.category().key(furnitureDraft.key!),
      KeyReference.presets.category().key(newArrivalsDraft.key!),
      KeyReference.presets.category().key(collectionsDraft.key!),
      KeyReference.presets.category().key(theMinimalistDraft.key!),
    ]);

export default minimalistModernSideTable;
