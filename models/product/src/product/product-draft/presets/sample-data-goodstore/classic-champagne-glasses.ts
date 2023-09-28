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

const classicChampagneGlassesProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const glasswareDraft = CategoryDraft.presets.sampleDataGoodStore
  .glassware()
  .build<TCategoryDraft>();

const barAndGlasswareDraft = CategoryDraft.presets.sampleDataGoodStore
  .barAndGlassware()
  .build<TCategoryDraft>();

const kitchenDraft = CategoryDraft.presets.sampleDataGoodStore
  .kitchen()
  .build<TCategoryDraft>();

const classicChampagneGlasses = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('classic-champagne-glasses')
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('Classic Champagne Glasses')
        ['en-GB']('Classic Champagne Glasses')
        ['de-DE']('Klassische Champagnergläser')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-US']('classic-champagne-glasses')
        ['en-GB']('classic-champagne-glasses')
        ['de-DE']('klassische-champagnerglser')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(classicChampagneGlassesProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.classicChampagneGlasses01()
    )
    .categories([
      KeyReference.presets.category().key(glasswareDraft.key!),
      KeyReference.presets.category().key(barAndGlasswareDraft.key!),
      KeyReference.presets.category().key(kitchenDraft.key!),
    ]);

export default classicChampagneGlasses;
