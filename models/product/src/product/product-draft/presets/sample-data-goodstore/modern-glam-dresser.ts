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

const modernGlamDresserProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const furnitureDraft = CategoryDraft.presets.sampleDataGoodStore
  .furniture()
  .build<TCategoryDraft>();

const collectionsDraft = CategoryDraft.presets.sampleDataGoodStore
  .collections()
  .build<TCategoryDraft>();

const theModernistDraft = CategoryDraft.presets.sampleDataGoodStore
  .theModernist()
  .build<TCategoryDraft>();

const storageTablesDraft = CategoryDraft.presets.sampleDataGoodStore
  .storageTables()
  .build<TCategoryDraft>();

const bedroomFurnitureDraft = CategoryDraft.presets.sampleDataGoodStore
  .bedroomFurniture()
  .build<TCategoryDraft>();

const modernGlamDresser = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('modern-glam-dresser')
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('Modern Glam Dresser')
        ['en-GB']('Modern Glam Dresser')
        ['de-DE']('Moderne glamouröse Kommode')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-US']('modern-glam-dresser')
        ['en-GB']('modern-glam-dresser')
        ['de-DE']('moderne-glamourse-kommode')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(modernGlamDresserProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.modernGlamDresser01()
    )
    .categories([
      KeyReference.presets.category().key(furnitureDraft.key!),
      KeyReference.presets.category().key(collectionsDraft.key!),
      KeyReference.presets.category().key(theModernistDraft.key!),
      KeyReference.presets.category().key(storageTablesDraft.key!),
      KeyReference.presets.category().key(bedroomFurnitureDraft.key!),
    ]);

export default modernGlamDresser;
