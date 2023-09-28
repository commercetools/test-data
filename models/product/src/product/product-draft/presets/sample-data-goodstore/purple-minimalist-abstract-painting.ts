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

const purpleMinimalistAbstractPaintingProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const homeAccentsDraft = CategoryDraft.presets.sampleDataGoodStore
  .homeAccents()
  .build<TCategoryDraft>();

const roomDecorDraft = CategoryDraft.presets.sampleDataGoodStore
  .roomDecor()
  .build<TCategoryDraft>();

const homeDecorDraft = CategoryDraft.presets.sampleDataGoodStore
  .homeDecor()
  .build<TCategoryDraft>();

const purpleMinimalistAbstractPainting = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('purple-minimalist-abstract-painting')
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('Purple Minimalist Abstract Painting')
        ['en-GB']('Purple Minimalist Abstract Painting')
        ['de-DE']('Lila Minimalistische Abstrakte Malerei')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-US']('purple-minimalist-abstract-painting')
        ['en-GB']('purple-minimalist-abstract-painting')
        ['de-DE']('lila-minimalistische-abstrakte-malerei')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(purpleMinimalistAbstractPaintingProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.purpleMinimalistAbstractPainting01()
    )
    .categories([
      KeyReference.presets.category().key(homeAccentsDraft.key!),
      KeyReference.presets.category().key(roomDecorDraft.key!),
      KeyReference.presets.category().key(homeDecorDraft.key!),
    ]);

export default purpleMinimalistAbstractPainting;
