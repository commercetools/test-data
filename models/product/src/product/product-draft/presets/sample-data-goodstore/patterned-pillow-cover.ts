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

const patternedPillowCoverProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const beddingDraft = CategoryDraft.presets.sampleDataGoodStore
  .bedding()
  .build<TCategoryDraft>();

const homeDecorDraft = CategoryDraft.presets.sampleDataGoodStore
  .homeDecor()
  .build<TCategoryDraft>();

const patternedPillowCover = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('patterned-pillow-cover')
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('Patterned Pillow Cover')
        ['en-GB']('Patterned Pillow Cover')
        ['de-DE']('Gemusterter Kissenbezug')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-US']('patterned-pillow-cover')
        ['en-GB']('patterned-pillow-cover')
        ['de-DE']('gemusterte-kissenhlle')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(patternedPillowCoverProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.patternedPillowCover01()
    )
    .variants([
      ProductVariantDraft.presets.sampleDataGoodStore.patternedPillowCover02(),
    ])
    .categories([
      KeyReference.presets.category().key(beddingDraft.key!),
      KeyReference.presets.category().key(homeDecorDraft.key!),
    ]);

export default patternedPillowCover;
