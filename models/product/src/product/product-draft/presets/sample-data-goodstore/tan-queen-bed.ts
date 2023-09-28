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

const tanQueenBedProductTypeDraft = ProductTypeDraft.presets.sampleDataGoodStore
  .furnitureAndDecor()
  .build<TProductTypeDraft>();

const furnitureDraft = CategoryDraft.presets.sampleDataGoodStore
  .furniture()
  .build<TCategoryDraft>();

const bedroomFurnitureDraft = CategoryDraft.presets.sampleDataGoodStore
  .bedroomFurniture()
  .build<TCategoryDraft>();

const bedsDraft = CategoryDraft.presets.sampleDataGoodStore
  .beds()
  .build<TCategoryDraft>();

const tanQueenBed = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('tan-queen-bed')
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('Tan Queen Bed')
        ['en-GB']('Tan Queen Bed')
        ['de-DE']('Hellbraunes Queen-Bett')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-US']('tan-queen-bed')
        ['en-GB']('tan-queen-bed')
        ['de-DE']('hellbraunes-queen-bett')
    )
    .productType(
      KeyReference.presets.productType().key(tanQueenBedProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.tanQueenBed01()
    )
    .categories([
      KeyReference.presets.category().key(furnitureDraft.key!),
      KeyReference.presets.category().key(bedroomFurnitureDraft.key!),
      KeyReference.presets.category().key(bedsDraft.key!),
    ]);

export default tanQueenBed;
