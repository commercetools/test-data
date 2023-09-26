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
import { ProductVariantDraft } from '../../../../product-variant/index';
import * as ProductDraft from '../../../product-draft';
import type { TProductDraftBuilder } from '../../../types';

const EU2TaxCategoryDraft = TaxCategoryDraft.presets.sampleDataGoodStore
  .EU2TaxCategory()
  .build<TTaxCategoryDraft>();

const patternedPillowCoverProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const beddingDraft = CategoryDraft.presets.sampleDataGoodstore
  .bedding()
  .build<TCategoryDraft>();

const homeDecorDraft = CategoryDraft.presets.sampleDataGoodstore
  .homeDecor()
  .build<TCategoryDraft>();

const patternedPillowCover = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('patterned-pillow-cover')
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Patterned Pillow Cover')
        ['de-DE']('Gemusterte Kissenhülle')
    )
    .slug(
      LocalizedString.presets
        .empty()
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
      KeyReference.presets.taxCategory().key(EU2TaxCategoryDraft.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodstore.patternedPillowCoverVariant01()
    )
    .variants([
      ProductVariantDraft.presets.sampleDataGoodstore.patternedPillowCoverVariant01(),
    ])
    .categories([
      KeyReference.presets.category().key(beddingDraft.key!),
      KeyReference.presets.category().key(homeDecorDraft.key!),
    ]);

export default patternedPillowCover;
