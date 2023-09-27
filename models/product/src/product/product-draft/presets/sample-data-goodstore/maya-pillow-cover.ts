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

const mayaPillowCoverProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodstore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const beddingDraft = CategoryDraft.presets.sampleDataGoodstore
  .bedding()
  .build<TCategoryDraft>();

const homeDecorDraft = CategoryDraft.presets.sampleDataGoodstore
  .homeDecor()
  .build<TCategoryDraft>();

const mayaPillowCover = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('maya-pillow-cover')
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Maya Pillow Cover')
        ['de-DE']('Maya-Kissenbezug')
        ['en-US']('Maya Pillow Cover')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('maya-pillow-cover')
        ['de-DE']('maya-kissenbezug')
        ['en-US']('maya-pillow-cover')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(mayaPillowCoverProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(vatStandardEuDraft.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodstore.mayaPillowCover01()
    )
    .variants([
      ProductVariantDraft.presets.sampleDataGoodstore.mayaPillowCover01(),
    ])
    .categories([
      KeyReference.presets.category().key(beddingDraft.key!),
      KeyReference.presets.category().key(homeDecorDraft.key!),
    ]);

export default mayaPillowCover;