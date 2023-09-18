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

const geometricPillowCaseProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodstore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const homeDecorDraft = CategoryDraft.presets.sampleDataGoodstore
  .homeDecor()
  .build<TCategoryDraft>();

const newArrivalsDraft = CategoryDraft.presets.sampleDataGoodstore
  .newArrivals()
  .build<TCategoryDraft>();

const beddingDraft = CategoryDraft.presets.sampleDataGoodstore
  .bedding()
  .build<TCategoryDraft>();

const geometricPillowCase = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('geometric-pillow-case')
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Geometric Pillow Case')
        ['de-DE']('Geometrischer Kissenbezug')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('geometric-pillow-case')
        ['de-DE']('geometrischer-kissenbezug')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(geometricPillowCaseProductTypeDraft.key!)
    )
    .publish(false)
    .taxCategory(
      KeyReference.presets.taxCategory().key(vatStandardEuDraft.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodstore.geometricPillowCase01()
    )
    .variants([
      ProductVariantDraft.presets.sampleDataGoodstore.geometricPillowCase01(),
      ProductVariantDraft.presets.sampleDataGoodstore.geometricPillowCase01(),
    ])
    .categories([
      KeyReference.presets.category().key(homeDecorDraft.key!),
      KeyReference.presets.category().key(newArrivalsDraft.key!),
      KeyReference.presets.category().key(beddingDraft.key!),
    ]);

export default geometricPillowCase;
