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

const euDraft = TaxCategoryDraft.presets.sampleDataGoodstore
  .eu()
  .build<TTaxCategoryDraft>();

const minimalistModernSideTableProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodstore
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

const newArrivalsDraft = CategoryDraft.presets.sampleDataGoodstore
  .newArrivals()
  .build<TCategoryDraft>();

const collectionsDraft = CategoryDraft.presets.sampleDataGoodstore
  .collections()
  .build<TCategoryDraft>();

const theMinimalistDraft = CategoryDraft.presets.sampleDataGoodstore
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
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('minimalist-modern-side-table')
        ['de-DE']('minimalistischer-moderner-beistelltisch')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(minimalistModernSideTableProductTypeDraft.key!)
    )
    .publish(false)
    .taxCategory(KeyReference.presets.taxCategory().key(euDraft.key!))
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodstore.minimalistModernSideTable01()
    )
    .variants([
      ProductVariantDraft.presets.sampleDataGoodstore.minimalistModernSideTable01(),
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
