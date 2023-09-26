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

const beddingBundleProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .beddingBundle()
    .build<TProductTypeDraft>();

const beddingDraft = CategoryDraft.presets.sampleDataGoodstore
  .bedding()
  .build<TCategoryDraft>();

const homeDecorDraft = CategoryDraft.presets.sampleDataGoodstore
  .homeDecor()
  .build<TCategoryDraft>();

const beddingBundle = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('bedding-bundle')
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Dreamscape Comfort Collection')
        ['de-DE']('Dreamscape Comfort-Kollektion')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('test-bundle')
        ['de-DE']('dreamscape-comfort-kollektion')
    )
    .productType(
      KeyReference.presets.productType().key(beddingBundleProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(EU2TaxCategoryDraft.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodstore.beddingBundleVariant01()
    )
    .categories([
      KeyReference.presets.category().key(beddingDraft.key!),
      KeyReference.presets.category().key(homeDecorDraft.key!),
    ]);

export default beddingBundle;
