import { TBuilder } from '@/core';
import { CategoryDraft, TCategoryDraft } from '@/models/category';
import { KeyReferenceDraft, LocalizedStringDraft } from '@/models/commons';
import {
  ProductTypeDraft,
  type TProductTypeDraft,
} from '@/models/product-type';
import {
  TaxCategoryDraft,
  type TTaxCategoryDraft,
} from '@/models/tax-category';
import { ProductVariantDraft } from '../../../../product-variant/product-variant-draft';
import { ProductDraft } from '../../../product-draft';
import type { TProductDraft } from '../../../types';

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataB2CLifestyle
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const purpleMinimalistAbstractPaintingProductTypeDraft =
  ProductTypeDraft.presets.sampleDataB2CLifestyle
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const homeAccentsDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .homeAccents()
  .build<TCategoryDraft>();

const roomDecorDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .roomDecor()
  .build<TCategoryDraft>();

const homeDecorDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .homeDecor()
  .build<TCategoryDraft>();

const purpleMinimalistAbstractPainting = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .key('purple-minimalist-abstract-painting')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('Purple Minimalist Abstract Painting')
        ['de-DE']('Lila Minimalistische Abstrakte Malerei')
        ['en-US']('Purple Minimalist Abstract Painting')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-GB'
        ]('A purple minimalist abstract painting is a simple and elegant work of art that relies on the use of minimal elements and a limited color palette to create a striking visual impact. The painting is created with acrylic paints on canvas.  The color scheme of the painting is predominantly purple, with little or no use of other colors. The use of purple in the painting may be symbolic, representing creativity, spirituality, or mystery.  The painting can be hung on a wall as part of a gallery grouping. The minimalist nature of the painting allows it to blend seamlessly with a variety of interior design styles and color schemes.  Overall, a purple minimalist abstract painting is a sophisticated and understated work of art that can add a sense of serenity and harmony to any space. Its simple composition and limited color palette can create a calming and meditative atmosphere, while the use of purple adds a sense of mystery and depth to the painting.')
        [
          'de-DE'
        ]('Ein lilafarbenes minimalistisches abstraktes Gemälde ist ein einfaches und elegantes Kunstwerk, das durch die Verwendung minimaler Elemente und einer begrenzten Farbpalette eine beeindruckende visuelle Wirkung erzielt. Das Gemälde wurde mit Acrylfarben auf Leinwand gemalt. Das Farbschema des Gemäldes ist überwiegend violett, mit wenig bis gar keiner Verwendung anderer Farben. Die Verwendung von Violett in dem Gemälde kann symbolisch sein und Kreativität, Spiritualität oder Geheimnisse darstellen. Das Gemälde kann als Teil einer Galeriegruppe an die Wand gehängt werden. Der minimalistische Charakter des Gemäldes erlaubt es, es nahtlos mit einer Vielzahl von Einrichtungsstilen und Farbschemata zu kombinieren. Insgesamt ist ein lilafarbenes, minimalistisches, abstraktes Gemälde ein raffiniertes und unaufdringliches Kunstwerk, das jedem Raum ein Gefühl von Gelassenheit und Harmonie verleihen kann. Die einfache Komposition und die begrenzte Farbpalette können eine beruhigende und meditative Atmosphäre schaffen, während die Verwendung von Lila dem Gemälde ein Gefühl von Geheimnis und Tiefe verleiht.')
        [
          'en-US'
        ]('A purple minimalist abstract painting is a simple and elegant work of art that relies on the use of minimal elements and a limited color palette to create a striking visual impact. The painting is created with acrylic paints on canvas.  The color scheme of the painting is predominantly purple, with little or no use of other colors. The use of purple in the painting may be symbolic, representing creativity, spirituality, or mystery.  The painting can be hung on a wall as part of a gallery grouping. The minimalist nature of the painting allows it to blend seamlessly with a variety of interior design styles and color schemes.  Overall, a purple minimalist abstract painting is a sophisticated and understated work of art that can add a sense of serenity and harmony to any space. Its simple composition and limited color palette can create a calming and meditative atmosphere, while the use of purple adds a sense of mystery and depth to the painting.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('purple-minimalist-abstract-painting')
        ['de-DE']('lila-minimalistische-abstrakte-malerei')
        ['en-US']('purple-minimalist-abstract-painting')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(purpleMinimalistAbstractPaintingProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.purpleMinimalistAbstractPainting01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(homeAccentsDraft.key!),
      KeyReferenceDraft.presets.category().key(roomDecorDraft.key!),
      KeyReferenceDraft.presets.category().key(homeDecorDraft.key!),
    ]);

export default purpleMinimalistAbstractPainting;
