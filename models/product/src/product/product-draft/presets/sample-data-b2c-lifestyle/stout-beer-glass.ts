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

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataB2CLifestyle
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const stoutBeerGlassProductTypeDraft =
  ProductTypeDraft.presets.sampleDataB2CLifestyle
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const glasswareDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .glassware()
  .build<TCategoryDraft>();

const barAndGlasswareDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .barAndGlassware()
  .build<TCategoryDraft>();

const kitchenDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .kitchen()
  .build<TCategoryDraft>();

const stoutBeerGlass = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .key('stout-beer-glass')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Stout Beer Glass')
        ['en-GB']('Stout Beer Glass')
        ['de-DE']('Stout-Bierglas')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-US'
        ]('A stout beer glass, also known as a "pint glass," is a type of drinking glass that is designed specifically for serving and enjoying stout beers. It has a short, wide shape with a thick, heavy base that provides stability and balance.  The design of the stout beer glass is intended to enhance the drinking experience by allowing the full range of flavors and aromas of the beer to be appreciated. The wide opening of the glass allows the drinker to fully appreciate the color and clarity of the beer, while the heavy base helps to keep the beer from spilling or tipping over.  Overall, a stout beer glass is a classic and timeless type of drinking glass that is ideal for savoring the rich flavor and aroma of fine stout beers. Its simple yet elegant design makes it a popular choice for beer lovers and casual drinkers alike.')
        [
          'de-DE'
        ]('Ein Stout-Bierglas, auch als "Pintglas" bekannt, ist ein Trinkglas, das speziell zum Servieren und Genießen von Starkbieren entwickelt wurde. Es hat eine kurze, breite Form mit einem dicken, schweren Boden, der für Stabilität und Gleichgewicht sorgt.  Das Design des Stout-Bierglases unterstützt das Trinkerlebnis, indem es die volle Geschmacks- und Aromenvielfalt des Bieres zur Geltung bringt. Die breite Öffnung des Glases lässt die Farbe und Klarheit des Bieres erkennen, während der schwere Boden dazu beiträgt, dass das Bier nicht verschüttet oder umkippt.  Ein Pintglas ist ein klassisches und zeitloses Trinkglas, das sich ideal eignet, um den reichen Geschmack und das Aroma feiner Stout-Biere zu genießen. Sein einfaches aber elegantes Design macht es zu einer beliebten Wahl für Bierliebhaber und Gelegenheitsgeniesser gleichermaßen.')
        [
          'en-GB'
        ]('A stout beer glass, also known as a "pint glass," is a type of drinking glass that is designed specifically for serving and enjoying stout beers. It has a short, wide shape with a thick, heavy base that provides stability and balance.  The design of the stout beer glass is intended to enhance the drinking experience by allowing the full range of flavors and aromas of the beer to be appreciated. The wide opening of the glass allows the drinker to fully appreciate the color and clarity of the beer, while the heavy base helps to keep the beer from spilling or tipping over.  Overall, a stout beer glass is a classic and timeless type of drinking glass that is ideal for savoring the rich flavor and aroma of fine stout beers. Its simple yet elegant design makes it a popular choice for beer lovers and casual drinkers alike.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('stout-beer-glass')
        ['en-GB']('stout-beer-glass')
        ['de-DE']('starkes-bierglas')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(stoutBeerGlassProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.stoutBeerGlass01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(glasswareDraft.key!),
      KeyReferenceDraft.presets.category().key(barAndGlasswareDraft.key!),
      KeyReferenceDraft.presets.category().key(kitchenDraft.key!),
    ]);

export default stoutBeerGlass;
