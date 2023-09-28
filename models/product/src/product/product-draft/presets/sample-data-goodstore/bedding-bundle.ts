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

const beddingBundleProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .beddingBundle()
    .build<TProductTypeDraft>();

const beddingDraft = CategoryDraft.presets.sampleDataGoodStore
  .bedding()
  .build<TCategoryDraft>();

const homeDecorDraft = CategoryDraft.presets.sampleDataGoodStore
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
        ['en-US']('Dreamscape Comfort Collection')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('test-bundle')
        ['de-DE']('dreamscape-comfort-kollektion')
        ['en-US']('test-bundle')
    )
    .productType(
      KeyReference.presets.productType().key(beddingBundleProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.beddingBundle01()
    )
    .categories([
      KeyReference.presets.category().key(beddingDraft.key!),
      KeyReference.presets.category().key(homeDecorDraft.key!),
    ]);

export default beddingBundle;
