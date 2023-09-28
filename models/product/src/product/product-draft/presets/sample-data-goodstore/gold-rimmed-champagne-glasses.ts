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

const goldRimmedChampagneGlassesProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const kitchenDraft = CategoryDraft.presets.sampleDataGoodStore
  .kitchen()
  .build<TCategoryDraft>();

const barAndGlasswareDraft = CategoryDraft.presets.sampleDataGoodStore
  .barAndGlassware()
  .build<TCategoryDraft>();

const glasswareDraft = CategoryDraft.presets.sampleDataGoodStore
  .glassware()
  .build<TCategoryDraft>();

const goldRimmedChampagneGlasses = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('gold-rimmed-champagne-glasses')
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('Gold Rimmed Champagne Glasses')
        ['en-GB']('Gold Rimmed Champagne Glasses')
        ['de-DE']('Champagnergläser mit Goldrand')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-US']('gold-rimmed-champagne-glasses')
        ['en-GB']('gold-rimmed-champagne-glasses')
        ['de-DE']('champagnerglser-mit-goldrand')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(goldRimmedChampagneGlassesProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.goldRimmedChampagneGlasses01()
    )
    .categories([
      KeyReference.presets.category().key(kitchenDraft.key!),
      KeyReference.presets.category().key(barAndGlasswareDraft.key!),
      KeyReference.presets.category().key(glasswareDraft.key!),
    ]);

export default goldRimmedChampagneGlasses;
