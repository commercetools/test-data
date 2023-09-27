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

const ryeWhiskeyGlassProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodstore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const barAndGlasswareDraft = CategoryDraft.presets.sampleDataGoodstore
  .barAndGlassware()
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
        ['en-US']('Rye Whiskey Glass')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('rye-whiskey-glass')
        ['de-DE']('roggen-whisky-glas')
        ['en-US']('rye-whiskey-glass')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(ryeWhiskeyGlassProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(vatStandardEuDraft.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodstore.ryeWhiskeyGlass01()
    )
    .categories([
      KeyReference.presets.category().key(barAndGlasswareDraft.key!),
      KeyReference.presets.category().key(glasswareDraft.key!),
      KeyReference.presets.category().key(kitchenDraft.key!),
    ]);

export default ryeWhiskeyGlass;