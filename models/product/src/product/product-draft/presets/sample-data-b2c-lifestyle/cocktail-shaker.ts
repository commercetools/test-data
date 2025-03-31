import {
  CategoryDraft,
  TCategoryDraft,
} from '@commercetools-test-data/category';
import {
  KeyReferenceDraft,
  LocalizedStringDraft,
} from '@commercetools-test-data/commons';
import { TBuilder } from '@commercetools-test-data/core';
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
import type { TProductDraft } from '../../../types';

const standardTaxCategoryDraft = TaxCategoryDraft.presets.sampleDataB2CLifestyle
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const cocktailShakerProductTypeDraft =
  ProductTypeDraft.presets.sampleDataB2CLifestyle
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const barAccessoriesDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .barAccessories()
  .build<TCategoryDraft>();

const barAndGlasswareDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .barAndGlassware()
  .build<TCategoryDraft>();

const kitchenDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .kitchen()
  .build<TCategoryDraft>();

const cocktailShaker = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .key('cocktail-shaker')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Cocktail Shaker')
        ['en-GB']('Cocktail Shaker')
        ['de-DE']('Cocktail Shaker')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-GB'
        ]('A cocktail shaker is a tool used in mixing and preparing alcoholic beverages such as cocktails. It is a metal container with a lid that seals tightly to prevent spills. The container has a tapered shape, with a wider base and a narrower top. This design allows for easy mixing of ingredients by shaking them together. The lid has a built-in strainer to separate the liquid from the ice and other solid ingredients. The shaker is made of stainless steel.')
        [
          'en-US'
        ]('A cocktail shaker is a tool used in mixing and preparing alcoholic beverages such as cocktails. It is a metal container with a lid that seals tightly to prevent spills. The container has a tapered shape, with a wider base and a narrower top. This design allows for easy mixing of ingredients by shaking them together. The lid has a built-in strainer to separate the liquid from the ice and other solid ingredients. The shaker is made of stainless steel.')
        [
          'de-DE'
        ]('Ein Cocktailshaker ist ein Werkzeug, das zum Mischen und Zubereiten von alkoholischen Getränken wie Cocktails verwendet wird. Es ist ein Metallbehälter mit einem Deckel, der dicht abschließt, um ein Verschütten zu verhindern. Der Behälter hat eine sich verjüngende Form mit einer breiteren Basis und einer schmaleren Oberseite. Dieses Design ermöglicht ein einfaches Mischen der Zutaten durch Schütteln. Der Deckel hat ein eingebautes Sieb, um die Flüssigkeit vom Eis und anderen festen Zutaten zu trennen. Material: Edelstahöl')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('cocktail-shaker')
        ['de-DE']('cocktail-shaker')
        ['en-US']('cocktail-shaker')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(cocktailShakerProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategoryDraft.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.cocktailShaker01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(barAccessoriesDraft.key!),
      KeyReferenceDraft.presets.category().key(barAndGlasswareDraft.key!),
      KeyReferenceDraft.presets.category().key(kitchenDraft.key!),
    ]);

export default cocktailShaker;
