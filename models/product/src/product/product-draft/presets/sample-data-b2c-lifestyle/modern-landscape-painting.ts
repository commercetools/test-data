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
import * as ProductVariantDraft from '../../../../product-variant/product-variant-draft';
import * as ProductDraft from '../../../product-draft';
import type { TProductDraftBuilder } from '../../../types';

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataB2CLifestyle
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const modernLandscapePaintingProductTypeDraft =
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

const modernLandscapePainting = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('modern-landscape-painting')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('Modern Landscape Painting')
        ['de-DE']('Moderne Landschaftsmalerei')
        ['en-US']('Modern Landscape Painting')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-GB'
        ]('A modern cubist landscape painting is a striking and dynamic work of art that combines elements of traditional landscape painting with the fractured and abstract style of cubism. The painting is created with oil paints on canvas, and features a range of bold colors and geometric shapes.  The composition of the painting is a landscape scene, depicting a natural setting. However, the scene is fragmented and abstracted, with overlapping planes of color and geometric shapes that distort and fracture the landscape.  The use of color in the painting is vibrant and bold, with strong contrasts between light and dark areas. The artist may have used a variety of techniques, such as layering, blending, or stippling, to create a dynamic and visually interesting piece.  The modern and abstract nature of the painting makes it a perfect addition to contemporary interior design schemes.  Overall, a modern cubist landscape painting is a bold and innovative work of art that can add a sense of energy and dynamism to any space. Its fragmented and abstracted composition invites viewers to interpret and connect with the painting in their own way, while the use of bold colors and geometric shapes creates a sense of drama and excitement.')
        [
          'de-DE'
        ]('Ein modernes kubistisches Landschaftsgemälde ist ein eindrucksvolles und dynamisches Kunstwerk, das Elemente der traditionellen Landschaftsmalerei mit dem gebrochenen und abstrakten Stil des Kubismus verbindet. Das Gemälde wurde mit Ölfarben auf Leinwand gemalt und weist eine Reihe kräftiger Farben und geometrischer Formen auf. Die Komposition des Gemäldes ist eine Landschaftsszene, die eine natürliche Umgebung darstellt. Die Szene ist jedoch fragmentiert und abstrahiert, mit sich überlagernden Farbflächen und geometrischen Formen, die die Landschaft verzerren und zerbrechen. Die Farbgebung des Gemäldes ist lebhaft und kräftig, mit starken Kontrasten zwischen hellen und dunklen Bereichen. Der Künstler hat möglicherweise eine Reihe von Techniken angewandt, wie z. B. Schichtung, Überblendung oder Tupfen, um ein dynamisches und visuell interessantes Werk zu schaffen. Der moderne und abstrakte Charakter des Gemäldes macht es zu einer perfekten Ergänzung für zeitgenössische Innenarchitekturen. Insgesamt ist ein modernes kubistisches Landschaftsgemälde ein kühnes und innovatives Kunstwerk, das jedem Raum ein Gefühl von Energie und Dynamik verleihen kann. Die fragmentierte und abstrahierte Komposition lädt den Betrachter dazu ein, das Gemälde auf seine eigene Weise zu interpretieren und mit ihm in Verbindung zu treten, während die Verwendung kräftiger Farben und geometrischer Formen ein Gefühl von Dramatik und Aufregung erzeugt.')
        [
          'en-US'
        ]('A modern cubist landscape painting is a striking and dynamic work of art that combines elements of traditional landscape painting with the fractured and abstract style of cubism. The painting is created with oil paints on canvas, and features a range of bold colors and geometric shapes.  The composition of the painting is a landscape scene, depicting a natural setting. However, the scene is fragmented and abstracted, with overlapping planes of color and geometric shapes that distort and fracture the landscape.  The use of color in the painting is vibrant and bold, with strong contrasts between light and dark areas. The artist may have used a variety of techniques, such as layering, blending, or stippling, to create a dynamic and visually interesting piece.  The modern and abstract nature of the painting makes it a perfect addition to contemporary interior design schemes.  Overall, a modern cubist landscape painting is a bold and innovative work of art that can add a sense of energy and dynamism to any space. Its fragmented and abstracted composition invites viewers to interpret and connect with the painting in their own way, while the use of bold colors and geometric shapes creates a sense of drama and excitement.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('modern-landscape-painting')
        ['de-DE']('moderne-landschaftsmalerei')
        ['en-US']('modern-landscape-painting')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(modernLandscapePaintingProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.modernLandscapePainting01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(homeAccentsDraft.key!),
      KeyReferenceDraft.presets.category().key(roomDecorDraft.key!),
      KeyReferenceDraft.presets.category().key(homeDecorDraft.key!),
    ]);

export default modernLandscapePainting;
