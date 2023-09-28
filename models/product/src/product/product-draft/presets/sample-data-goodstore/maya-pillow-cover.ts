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

const mayaPillowCoverProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const beddingDraft = CategoryDraft.presets.sampleDataGoodStore
  .bedding()
  .build<TCategoryDraft>();

const homeDecorDraft = CategoryDraft.presets.sampleDataGoodStore
  .homeDecor()
  .build<TCategoryDraft>();

const mayaPillowCover = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('maya-pillow-cover')
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('Maya Pillow Cover')
        ['en-GB']('Maya Pillow Cover')
        ['de-DE']('Maya Kissenbezug')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-US']('maya-pillow-cover')
        ['en-GB']('maya-pillow-cover')
        ['de-DE']('maya-kissenbezug')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(mayaPillowCoverProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.mayaPillowCover01()
    )
    .variants([
      ProductVariantDraft.presets.sampleDataGoodStore.mayaPillowCover02(),
    ])
    .categories([
      KeyReference.presets.category().key(beddingDraft.key!),
      KeyReference.presets.category().key(homeDecorDraft.key!),
    ]);

export default mayaPillowCover;
