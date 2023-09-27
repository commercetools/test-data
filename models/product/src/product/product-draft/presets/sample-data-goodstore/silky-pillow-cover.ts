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

const silkyPillowCoverProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodstore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const beddingDraft = CategoryDraft.presets.sampleDataGoodstore
  .bedding()
  .build<TCategoryDraft>();

const homeDecorDraft = CategoryDraft.presets.sampleDataGoodstore
  .homeDecor()
  .build<TCategoryDraft>();

const silkyPillowCover = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('silky-pillow-cover')
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Silky Pillow Cover')
        ['de-DE']('Seidige Kissenhülle')
        ['en-US']('Silky Pillow Cover')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('silky-pillow-cover')
        ['de-DE']('seidige-kissenhlle')
        ['en-US']('silky-pillow-cover')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(silkyPillowCoverProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(vatStandardEuDraft.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodstore.silkyPillowCover01()
    )
    .categories([
      KeyReference.presets.category().key(beddingDraft.key!),
      KeyReference.presets.category().key(homeDecorDraft.key!),
    ]);

export default silkyPillowCover;