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

const vatStandardEuDraft = TaxCategoryDraft.presets.sampleDataGoodstore
  .vatStandardEu()
  .build<TTaxCategoryDraft>();

const goldRimmedChampagneGlassesProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodstore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const kitchenDraft = CategoryDraft.presets.sampleDataGoodstore
  .kitchen()
  .build<TCategoryDraft>();

const barGlasswareDraft = CategoryDraft.presets.sampleDataGoodstore
  .barGlassware()
  .build<TCategoryDraft>();

const glasswareDraft = CategoryDraft.presets.sampleDataGoodstore
  .glassware()
  .build<TCategoryDraft>();

const goldRimmedChampagneGlasses = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('gold-rimmed-champagne-glasses')
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Gold Rimmed Champagne Glasses')
        ['de-DE']('Champagnergläser mit Goldrand')
    )
    .slug(
      LocalizedString.presets
        .empty()
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
      KeyReference.presets.taxCategory().key(vatStandardEuDraft.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodstore.goldRimmedChampagneGlasses01()
    )
    .categories([
      KeyReference.presets.category().key(kitchenDraft.key!),
      KeyReference.presets.category().key(barGlasswareDraft.key!),
      KeyReference.presets.category().key(glasswareDraft.key!),
    ]);

export default goldRimmedChampagneGlasses;
