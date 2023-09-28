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

const opalKingBedProductTypeDraft = ProductTypeDraft.presets.sampleDataGoodStore
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

const opalKingBed = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('opal-king-bed')
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('Opal King Bed')
        ['en-GB']('Opal King Bed')
        ['de-DE']('Opal King Bett')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-US']('opal-king-bed')
        ['en-GB']('opal-king-bed')
        ['de-DE']('opal-kingsize-bett')
    )
    .productType(
      KeyReference.presets.productType().key(opalKingBedProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.opalKingBed01()
    )
    .categories([
      KeyReference.presets.category().key(bedroomFurnitureDraft.key!),
      KeyReference.presets.category().key(furnitureDraft.key!),
      KeyReference.presets.category().key(bedsDraft.key!),
    ]);

export default opalKingBed;
