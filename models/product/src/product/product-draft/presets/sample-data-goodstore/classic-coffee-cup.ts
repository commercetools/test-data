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

const euTaxCategoryDraft = TaxCategoryDraft.presets.sampleDataGoodStore
  .EUTaxCategory()
  .build<TTaxCategoryDraft>();

const classicCoffeeCupProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodstore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const barGlasswareDraft = CategoryDraft.presets.sampleDataGoodstore
  .barGlassware()
  .build<TCategoryDraft>();

const glasswareDraft = CategoryDraft.presets.sampleDataGoodstore
  .glassware()
  .build<TCategoryDraft>();

const kitchenDraft = CategoryDraft.presets.sampleDataGoodstore
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
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('classic-coffee-cup')
        ['de-DE']('klassische-kaffeetasse')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(classicCoffeeCupProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(euTaxCategoryDraft.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodstore.classicCoffeeCup01()
    )
    .categories([
      KeyReference.presets.category().key(barGlasswareDraft.key!),
      KeyReference.presets.category().key(glasswareDraft.key!),
      KeyReference.presets.category().key(kitchenDraft.key!),
    ]);

export default classicCoffeeCup;
