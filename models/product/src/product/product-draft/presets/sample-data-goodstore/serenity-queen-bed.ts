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

const serenityQueenBedProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const bedroomFurnitureDraft = CategoryDraft.presets.sampleDataGoodStore
  .bedroomFurniture()
  .build<TCategoryDraft>();

const furnitureDraft = CategoryDraft.presets.sampleDataGoodStore
  .furniture()
  .build<TCategoryDraft>();

const bedsDraft = CategoryDraft.presets.sampleDataGoodStore
  .beds()
  .build<TCategoryDraft>();

const serenityQueenBed = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('serenity-queen-bed')
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('Serenity Queen Bed')
        ['en-GB']('Serenity Queen Bed')
        ['de-DE']('Gelassenheit Queen-Bett')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-US']('serenity-queen-bed')
        ['en-GB']('serenity-queen-bed')
        ['de-DE']('gelassenheit-queen-bett')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(serenityQueenBedProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.serenityQueenBed01()
    )
    .categories([
      KeyReference.presets.category().key(bedroomFurnitureDraft.key!),
      KeyReference.presets.category().key(furnitureDraft.key!),
      KeyReference.presets.category().key(bedsDraft.key!),
    ]);

export default serenityQueenBed;
