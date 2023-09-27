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

const redModernPaintingProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodstore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const homeAccentsDraft = CategoryDraft.presets.sampleDataGoodstore
  .homeAccents()
  .build<TCategoryDraft>();

const roomDecorDraft = CategoryDraft.presets.sampleDataGoodstore
  .roomDecor()
  .build<TCategoryDraft>();

const homeDecorDraft = CategoryDraft.presets.sampleDataGoodstore
  .homeDecor()
  .build<TCategoryDraft>();

const redModernPainting = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('red-modern-painting')
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Red Modern Painting')
        ['de-DE']('Rote moderne Malerei')
        ['en-US']('Red Modern Painting')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('red-modern-painting')
        ['de-DE']('rote-moderne-malerei')
        ['en-US']('red-modern-painting')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(redModernPaintingProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(vatStandardEuDraft.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodstore.redModernPainting01()
    )
    .categories([
      KeyReference.presets.category().key(homeAccentsDraft.key!),
      KeyReference.presets.category().key(roomDecorDraft.key!),
      KeyReference.presets.category().key(homeDecorDraft.key!),
    ]);

export default redModernPainting;