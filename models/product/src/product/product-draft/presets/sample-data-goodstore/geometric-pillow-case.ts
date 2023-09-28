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

const geometricPillowCaseProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const homeDecorDraft = CategoryDraft.presets.sampleDataGoodStore
  .homeDecor()
  .build<TCategoryDraft>();

const newArrivalsDraft = CategoryDraft.presets.sampleDataGoodStore
  .newArrivals()
  .build<TCategoryDraft>();

const beddingDraft = CategoryDraft.presets.sampleDataGoodStore
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
        ['en-US']('Geometric Pillow Case')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('geometric-pillow-case')
        ['de-DE']('geometrischer-kissenbezug')
        ['en-US']('geometric-pillow-case')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(geometricPillowCaseProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.geometricPillowCase01()
    )
    .variants([
      ProductVariantDraft.presets.sampleDataGoodStore.geometricPillowCase02(),
      ProductVariantDraft.presets.sampleDataGoodStore.geometricPillowCase03(),
    ])
    .categories([
      KeyReference.presets.category().key(homeDecorDraft.key!),
      KeyReference.presets.category().key(newArrivalsDraft.key!),
      KeyReference.presets.category().key(beddingDraft.key!),
    ]);

export default geometricPillowCase;
