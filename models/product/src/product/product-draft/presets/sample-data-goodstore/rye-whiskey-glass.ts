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

const euDraft = TaxCategoryDraft.presets.sampleDataGoodstore
  .eu()
  .build<TTaxCategoryDraft>();

const ryeWhiskeyGlassProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodstore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const barGlasswareDraft = CategoryDraft.presets.sampleDataGoodstore
  .barGlassware()
  .build<TCategoryDraft>();

const glasswareDraft = CategoryDraft.presets.sampleDataGoodstore
  .glassware()
  .build<TCategoryDraft>();

const kitchenDraft = CategoryDraft.presets.sampleDataGoodstore
  .kitchen()
  .build<TCategoryDraft>();

const ryeWhiskeyGlass = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('rye-whiskey-glass')
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Rye Whiskey Glass')
        ['de-DE']('Roggen-Whisky-Glas')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('rye-whiskey-glass')
        ['de-DE']('roggen-whisky-glas')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(ryeWhiskeyGlassProductTypeDraft.key!)
    )
    .publish(false)
    .taxCategory(KeyReference.presets.taxCategory().key(euDraft.key!))
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodstore.ryeWhiskeyGlass01()
    )
    .categories([
      KeyReference.presets.category().key(barGlasswareDraft.key!),
      KeyReference.presets.category().key(glasswareDraft.key!),
      KeyReference.presets.category().key(kitchenDraft.key!),
    ]);

export default ryeWhiskeyGlass;
