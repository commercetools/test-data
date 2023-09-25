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

const idunPillowCoverProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodstore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const beddingDraft = CategoryDraft.presets.sampleDataGoodstore
  .bedding()
  .build<TCategoryDraft>();

const homeDecorDraft = CategoryDraft.presets.sampleDataGoodstore
  .homeDecor()
  .build<TCategoryDraft>();

const idunPillowCover = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('idun-pillow-cover')
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Idun Pillow Cover')
        ['de-DE']('Idun Kissenbezug')
        ['en-US']('Idun Pillow Cover')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('idun-pillow-cover')
        ['de-DE']('idun-kissenbezug')
        ['en-US']('idun-pillow-cover')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(idunPillowCoverProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(vatStandardEuDraft.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodstore.idunPillowCover01()
    )
    .categories([
      KeyReference.presets.category().key(beddingDraft.key!),
      KeyReference.presets.category().key(homeDecorDraft.key!),
    ]);

export default idunPillowCover;
