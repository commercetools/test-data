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

const cocktailStirringSpoonProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodstore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const barAccessoriesDraft = CategoryDraft.presets.sampleDataGoodstore
  .barAccessories()
  .build<TCategoryDraft>();

const barAndGlasswareDraft = CategoryDraft.presets.sampleDataGoodstore
  .barAndGlassware()
  .build<TCategoryDraft>();

const kitchenDraft = CategoryDraft.presets.sampleDataGoodstore
  .kitchen()
  .build<TCategoryDraft>();

const cocktailStirringSpoon = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('cocktail-stirring-spoon')
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Cocktail Stirring Spoon')
        ['de-DE']('Cocktail-Rührlöffel')
        ['en-US']('Cocktail Stirring Spoon')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('cocktail-stirring-spoon')
        ['de-DE']('cocktail-rhrlffel')
        ['en-US']('cocktail-stirring-spoon')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(cocktailStirringSpoonProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(vatStandardEuDraft.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodstore.cocktailStirringSpoon01()
    )
    .categories([
      KeyReference.presets.category().key(barAccessoriesDraft.key!),
      KeyReference.presets.category().key(barAndGlasswareDraft.key!),
      KeyReference.presets.category().key(kitchenDraft.key!),
    ]);

export default cocktailStirringSpoon;
