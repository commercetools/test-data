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

const stoutBeerGlassProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodstore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const glasswareDraft = CategoryDraft.presets.sampleDataGoodstore
  .glassware()
  .build<TCategoryDraft>();

const barAndGlasswareDraft = CategoryDraft.presets.sampleDataGoodstore
  .barAndGlassware()
  .build<TCategoryDraft>();

const kitchenDraft = CategoryDraft.presets.sampleDataGoodstore
  .kitchen()
  .build<TCategoryDraft>();

const stoutBeerGlass = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('stout-beer-glass')
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Stout Beer Glass')
        ['de-DE']('Starkes Bierglas')
        ['en-US']('Stout Beer Glass')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('stout-beer-glass')
        ['de-DE']('starkes-bierglas')
        ['en-US']('stout-beer-glass')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(stoutBeerGlassProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(vatStandardEuDraft.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodstore.stoutBeerGlass01()
    )
    .categories([
      KeyReference.presets.category().key(glasswareDraft.key!),
      KeyReference.presets.category().key(barAndGlasswareDraft.key!),
      KeyReference.presets.category().key(kitchenDraft.key!),
    ]);

export default stoutBeerGlass;
