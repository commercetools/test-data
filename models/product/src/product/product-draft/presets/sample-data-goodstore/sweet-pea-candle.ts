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

const sweetPeaCandleProductTypeDraft =
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

const sweetPeaCandle = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('sweet-pea-candle')
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('Sweet Pea Candle')
        ['en-GB']('Sweet Pea Candle')
        ['de-DE']('Süße Erbsenkerze')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-US']('sweat-pea-candle')
        ['en-GB']('sweat-pea-candle')
        ['de-DE']('kerze-der-sen-erbse')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(sweetPeaCandleProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.sweetPeaCandle01()
    )
    .categories([
      KeyReference.presets.category().key(homeAccentsDraft.key!),
      KeyReference.presets.category().key(roomDecorDraft.key!),
      KeyReference.presets.category().key(homeDecorDraft.key!),
    ]);

export default sweetPeaCandle;
