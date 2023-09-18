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

const euDraft = TaxCategoryDraft.presets.sampleDataGoodstore
  .eu()
  .build<TTaxCategoryDraft>();

const doubleSidedShotGlassProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodstore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const barAccessoriesDraft = CategoryDraft.presets.sampleDataGoodstore
  .barAccessories()
  .build<TCategoryDraft>();

const barGlasswareDraft = CategoryDraft.presets.sampleDataGoodstore
  .barGlassware()
  .build<TCategoryDraft>();

const kitchenDraft = CategoryDraft.presets.sampleDataGoodstore
  .kitchen()
  .build<TCategoryDraft>();

const doubleSidedShotGlass = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('double-sided-shot-glass')
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Double-sided Shot Glass')
        ['de-DE']('Doppelseitiges Schnapsglas')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('double-sided-shot-glass')
        ['de-DE']('doppelseitiges-schnapsglas')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(doubleSidedShotGlassProductTypeDraft.key!)
    )
    .publish(false)
    .taxCategory(KeyReference.presets.taxCategory().key(euDraft.key!))
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodstore.doubleSidedShotGlass01()
    )
    .categories([
      KeyReference.presets.category().key(barAccessoriesDraft.key!),
      KeyReference.presets.category().key(barGlasswareDraft.key!),
      KeyReference.presets.category().key(kitchenDraft.key!),
    ]);

export default doubleSidedShotGlass;
