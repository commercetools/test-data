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

const entrywayClosetProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const furnitureDraft = CategoryDraft.presets.sampleDataGoodStore
  .furniture()
  .build<TCategoryDraft>();

const bedroomFurnitureDraft = CategoryDraft.presets.sampleDataGoodStore
  .bedroomFurniture()
  .build<TCategoryDraft>();

const storageTablesDraft = CategoryDraft.presets.sampleDataGoodStore
  .storageTables()
  .build<TCategoryDraft>();

const entrywayCloset = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('entryway-closet')
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('Entryway Closet')
        ['en-GB']('Entryway Closet')
        ['de-DE']('Eingangsschrank')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-US']('entryway-closet')
        ['en-GB']('entryway-closet')
        ['de-DE']('eingangsschrank')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(entrywayClosetProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.entrywayCloset01()
    )
    .categories([
      KeyReference.presets.category().key(furnitureDraft.key!),
      KeyReference.presets.category().key(bedroomFurnitureDraft.key!),
      KeyReference.presets.category().key(storageTablesDraft.key!),
    ]);

export default entrywayCloset;
