import {
  CategoryDraft,
  TCategoryDraft,
} from '@commercetools-test-data/category';
import {
  KeyReferenceDraft,
  LocalizedStringDraft,
} from '@commercetools-test-data/commons';
import {
  ProductTypeDraft,
  type TProductTypeDraft,
} from '@commercetools-test-data/product-type';
import {
  TaxCategoryDraft,
  type TTaxCategoryDraft,
} from '@commercetools-test-data/tax-category';
import { ProductVariantDraft } from '../../../../product-variant/product-variant-draft';
import * as ProductDraft from '../../../product-draft';
import type { TProductDraftBuilder } from '../../../types';

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataB2CLifestyle
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const purpleLandscapePaintingProductTypeDraft =
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

const purpleLandscapePainting = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('purple-landscape-painting')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('Purple Landscape Painting')
        ['de-DE']('Lila Landschaftsmalerei')
        ['en-US']('Purple Landscape Painting')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-GB'
        ]('A purple landscape painting on canvas is a visually stunning work of art that can evoke a range of emotions and feelings. The painting is created with oil paints on a stretched canvas, and features a range of shades of purple, from deep indigo to light lavender.  The composition of the painting is a landscape scene, depicting a natural setting such as a forest, mountain range, or field. The use of purple in the painting may be symbolic, representing creativity, spirituality, or mystery.  The artist may have used a variety of techniques, such as layering, blending, or stippling, to create a dynamic and visually interesting piece. The texture of the painting may also be emphasized, with visible brushstrokes or thick impasto areas.  The painting can be hung on a wall as part of a gallery grouping or as a statement piece that dominates the room. The purple color scheme of the painting can create a powerful focal point, drawing the eye towards it and creating a sense of drama.  Overall, a purple landscape painting on canvas is a captivating and expressive work of art that can add a sense of wonder and enchantment to any space.')
        [
          'de-DE'
        ]('Ein violettes Landschaftsgemälde auf Leinwand ist ein visuell beeindruckendes Kunstwerk, das eine Reihe von Emotionen und Gefühlen hervorrufen kann. Das Gemälde wurde mit Ölfarben auf einer aufgespannten Leinwand gemalt und zeigt eine Reihe von Lila-Tönen, von tiefem Indigo bis zu hellem Lavendel. Die Komposition des Gemäldes ist eine Landschaftsszene, die eine natürliche Umgebung wie einen Wald, eine Bergkette oder ein Feld darstellt. Die Verwendung von Violett auf dem Gemälde kann symbolisch sein und für Kreativität, Spiritualität oder Geheimnisse stehen. Der Künstler schafft durch eine Vielzahl von Techniken, wie z. B. Schichtung, Überblendung oder Tupfen, ein dynamisches und visuell interessantes Werk. Die Textur des Gemäldes wird durch sichtbare Pinselstriche und dicke Impasto-Bereiche hervorgehoben. Das Gemälde kann als Teil einer Galeriegruppe oder als raumbeherrschendes Kunstwerk an die Wand gehängt werden. Das violette Farbschema des Gemäldes kann einen starken Fokuspunkt bilden, der den Blick auf das Bild lenkt und ein Gefühl der Dramatik erzeugt.  Insgesamt ist ein lilafarbenes Landschaftsgemälde auf Leinwand ein fesselndes und ausdrucksstarkes Kunstwerk, das jedem Raum ein Gefühl der Verwunderung und Verzauberung verleihen kann.')
        [
          'en-US'
        ]('A purple landscape painting on canvas is a visually stunning work of art that can evoke a range of emotions and feelings. The painting is created with oil paints on a stretched canvas, and features a range of shades of purple, from deep indigo to light lavender.  The composition of the painting is a landscape scene, depicting a natural setting such as a forest, mountain range, or field. The use of purple in the painting may be symbolic, representing creativity, spirituality, or mystery.  The artist may have used a variety of techniques, such as layering, blending, or stippling, to create a dynamic and visually interesting piece. The texture of the painting may also be emphasized, with visible brushstrokes or thick impasto areas.  The painting can be hung on a wall as part of a gallery grouping or as a statement piece that dominates the room. The purple color scheme of the painting can create a powerful focal point, drawing the eye towards it and creating a sense of drama.  Overall, a purple landscape painting on canvas is a captivating and expressive work of art that can add a sense of wonder and enchantment to any space.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('purple-landscape-painting')
        ['de-DE']('lila-landschaftsmalerei')
        ['en-US']('purple-landscape-painting')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(purpleLandscapePaintingProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.purpleLandscapePainting01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(homeAccentsDraft.key!),
      KeyReferenceDraft.presets.category().key(roomDecorDraft.key!),
      KeyReferenceDraft.presets.category().key(homeDecorDraft.key!),
    ]);

export default purpleLandscapePainting;
