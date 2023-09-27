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

const standardTaxCategoryDraft = TaxCategoryDraft.presets.sampleDataGoodStore
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
        ['en-GB']('Cocktail Stirring Spoon')
        ['de-DE']('Cocktail-Rührlöffel')
        ['en-US']('Cocktail Stirring Spoon')
    )
    .description(
      LocalizedString.presets
        .empty()
        ['en-GB'](
          'A cocktail stirring spoon is a long and slender utensil, made of stainless steel, used for stirring and mixing cocktails. It is usually around 8 inches long with a small, flat disc-shaped end for muddling ingredients and a twisted or spiraled handle for easy gripping. The twisted handle is not just for decoration, but also helps to create a better grip when mixing cocktails.'
        )
        ['de-DE'](
          'Ein Cocktail-Rührlöffel ist ein langes und schlankes Utensil aus Edelstahl, das zum Rühren und Mixen von Cocktails verwendet wird. Es ist normalerweise etwa 8 Zoll lang mit einem kleinen, flachen, scheibenförmigen Ende zum Vermischen von Zutaten und einem gedrehten oder spiralförmigen Griff zum einfachen Greifen. Der gedrehte Griff dient nicht nur der Dekoration, sondern verhilft auch zu einem besseren Halt beim Mixen von Cocktails.'
        )
        ['en-US'](
          'A cocktail stirring spoon is a long and slender utensil, made of stainless steel, used for stirring and mixing cocktails. It is usually around 8 inches long with a small, flat disc-shaped end for muddling ingredients and a twisted or spiraled handle for easy gripping. The twisted handle is not just for decoration, but also helps to create a better grip when mixing cocktails.'
        )
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
      KeyReference.presets.taxCategory().key(standardTaxCategoryDraft.key!)
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
