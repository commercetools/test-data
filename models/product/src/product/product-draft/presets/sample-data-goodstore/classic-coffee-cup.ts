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
import { ProductVariantDraft } from '../../../../product-variant';
import * as ProductDraft from '../../../product-draft';
import type { TProductDraftBuilder } from '../../../types';

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataGoodStore
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const classicCoffeeCupProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const barAndGlasswareDraft = CategoryDraft.presets.sampleDataGoodStore
  .barGlassware()
  .build<TCategoryDraft>();

const glasswareDraft = CategoryDraft.presets.sampleDataGoodStore
  .glassware()
  .build<TCategoryDraft>();

const kitchenDraft = CategoryDraft.presets.sampleDataGoodStore
  .kitchen()
  .build<TCategoryDraft>();

const classicCoffeeCup = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('classic-coffee-cup')
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Classic Coffee Cup')
        ['de-DE']('Klassische Kaffeetasse')
        ['en-US']('Classic Coffee Cup')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('classic-coffee-cup')
        ['de-DE']('klassische-kaffeetasse')
        ['en-US']('classic-coffee-cup')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(classicCoffeeCupProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.classicCoffeeCup01()
    )
    .categories([
      KeyReference.presets.category().key(barAndGlasswareDraft.key!),
      KeyReference.presets.category().key(glasswareDraft.key!),
      KeyReference.presets.category().key(kitchenDraft.key!),
    ]);

export default classicCoffeeCup;
