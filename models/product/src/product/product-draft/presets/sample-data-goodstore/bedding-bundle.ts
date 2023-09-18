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

const standardTaxCategoryDraft = TaxCategoryDraft.presets.sampleDataFashion
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const beddingBundleProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodstore
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
    .publish(false)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategoryDraft.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodstore.beddingBundle01()
    )
    .categories([
      KeyReference.presets.category().key(beddingDraft.key!),
      KeyReference.presets.category().key(homeDecorDraft.key!),
    ]);

export default beddingBundle;
