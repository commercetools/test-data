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

const purpleMinimalistAbstractPaintingProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const homeAccentsDraft = CategoryDraft.presets.sampleDataGoodStore
  .homeAccents()
  .build<TCategoryDraft>();

const roomDecorDraft = CategoryDraft.presets.sampleDataGoodStore
  .roomDecor()
  .build<TCategoryDraft>();

const homeDecorDraft = CategoryDraft.presets.sampleDataGoodStore
  .homeDecor()
  .build<TCategoryDraft>();

const purpleMinimalistAbstractPainting = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('purple-minimalist-abstract-painting')
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Purple Minimalist Abstract Painting')
        ['de-DE']('Lila minimalistische abstrakte Malerei')
        ['en-US']('Purple Minimalist Abstract Painting')
    )
    .description(
      LocalizedString.presets
        .empty()
        ['en-GB'](
          'A purple minimalist abstract painting is a simple and elegant work of art that relies on the use of minimal elements and a limited color palette to create a striking visual impact. The painting is created with acrylic paints on canvas.  The color scheme of the painting is predominantly purple, with little or no use of other colors. The use of purple in the painting may be symbolic, representing creativity, spirituality, or mystery.  The painting can be hung on a wall as part of a gallery grouping. The minimalist nature of the painting allows it to blend seamlessly with a variety of interior design styles and color schemes.  Overall, a purple minimalist abstract painting is a sophisticated and understated work of art that can add a sense of serenity and harmony to any space. Its simple composition and limited color palette can create a calming and meditative atmosphere, while the use of purple adds a sense of mystery and depth to the painting.'
        )
        ['de-DE'](
          'Ein violettes minimalistisches abstraktes Gemälde ist ein einfaches und elegantes Kunstwerk, das auf der Verwendung minimaler Elemente und einer begrenzten Farbpalette beruht, um eine auffällige visuelle Wirkung zu erzielen. Das Gemälde entsteht mit Acrylfarben auf Leinwand.  Das Farbschema des Gemäldes ist überwiegend lila, mit wenig oder gar keiner Verwendung anderer Farben. Die Verwendung von Lila im Gemälde kann symbolisch sein und Kreativität, Spiritualität oder Mysterium darstellen.  Das Gemälde kann als Teil einer Galeriegruppe an die Wand gehängt werden. Die minimalistische Natur des Gemäldes ermöglicht es, sich nahtlos in eine Vielzahl von Einrichtungsstilen und Farbschemata einzufügen.  Insgesamt ist ein purpurfarbenes minimalistisches abstraktes Gemälde ein raffiniertes und dezentes Kunstwerk, das jedem Raum ein Gefühl von Gelassenheit und Harmonie verleihen kann. Seine einfache Komposition und die begrenzte Farbpalette können eine beruhigende und meditative Atmosphäre schaffen, während die Verwendung von Lila dem Gemälde ein Gefühl von Geheimnis und Tiefe verleiht.'
        )
        ['en-US'](
          'A purple minimalist abstract painting is a simple and elegant work of art that relies on the use of minimal elements and a limited color palette to create a striking visual impact. The painting is created with acrylic paints on canvas.  The color scheme of the painting is predominantly purple, with little or no use of other colors. The use of purple in the painting may be symbolic, representing creativity, spirituality, or mystery.  The painting can be hung on a wall as part of a gallery grouping. The minimalist nature of the painting allows it to blend seamlessly with a variety of interior design styles and color schemes.  Overall, a purple minimalist abstract painting is a sophisticated and understated work of art that can add a sense of serenity and harmony to any space. Its simple composition and limited color palette can create a calming and meditative atmosphere, while the use of purple adds a sense of mystery and depth to the painting.'
        )
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('purple-minimalist-abstract-painting')
        ['de-DE']('lila-minimalistische-abstrakte-malerei')
        ['en-US']('purple-minimalist-abstract-painting')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(purpleMinimalistAbstractPaintingProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.purpleMinimalistAbstractPainting01()
    )
    .categories([
      KeyReference.presets.category().key(homeAccentsDraft.key!),
      KeyReference.presets.category().key(roomDecorDraft.key!),
      KeyReference.presets.category().key(homeDecorDraft.key!),
    ]);

export default purpleMinimalistAbstractPainting;
