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

const cocktailStirringSpoonProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const barAccessoriesDraft = CategoryDraft.presets.sampleDataGoodStore
  .barAccessories()
  .build<TCategoryDraft>();

const barAndGlasswareDraft = CategoryDraft.presets.sampleDataGoodStore
  .barAndGlassware()
  .build<TCategoryDraft>();

const kitchenDraft = CategoryDraft.presets.sampleDataGoodStore
  .kitchen()
  .build<TCategoryDraft>();

const cocktailStirringSpoon = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('cocktail-stirring-spoon')
    .name(
      LocalizedString.presets
        .empty()
        ['en-US']('Cocktail Stirring Spoon')
        ['en-GB']('Cocktail Stirring Spoon')
        ['de-DE']('Cocktail-Rührlöffel')
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-US']('cocktail-stirring-spoon')
        ['en-GB']('cocktail-stirring-spoon')
        ['de-DE']('cocktail-rhrlffel')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(cocktailStirringSpoonProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.cocktailStirringSpoon01()
    )
    .categories([
      KeyReference.presets.category().key(barAccessoriesDraft.key!),
      KeyReference.presets.category().key(barAndGlasswareDraft.key!),
      KeyReference.presets.category().key(kitchenDraft.key!),
    ]);

export default cocktailStirringSpoon;
