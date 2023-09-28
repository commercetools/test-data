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

const idunPillowCoverProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const beddingDraft = CategoryDraft.presets.sampleDataGoodStore
  .bedding()
  .build<TCategoryDraft>();

const homeDecorDraft = CategoryDraft.presets.sampleDataGoodStore
  .homeDecor()
  .build<TCategoryDraft>();

const idunPillowCover = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('idun-pillow-cover')
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('Idun Pillow Cover')
        ['en-GB']('Idun Pillow Cover')
        ['de-DE']('Idun Kissenbezug')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-US']('idun-pillow-cover')
        ['en-GB']('idun-pillow-cover')
        ['de-DE']('idun-kissenbezug')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(idunPillowCoverProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.idunPillowCover01()
    )
    .categories([
      KeyReference.presets.category().key(beddingDraft.key!),
      KeyReference.presets.category().key(homeDecorDraft.key!),
    ]);

export default idunPillowCover;
