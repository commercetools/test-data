import { TBuilder } from '../../../../../../core';
import { CategoryDraft, TCategoryDraft } from '../../../../../category';
import {
  KeyReferenceDraft,
  LocalizedStringDraft,
} from '../../../../../commons';
import {
  ProductTypeDraft,
  type TProductTypeDraft,
} from '../../../../../product-type';
import {
  TaxCategoryDraft,
  type TTaxCategoryDraft,
} from '../../../../../tax-category';
import { ProductVariantDraft } from '../../../../product-variant/product-variant-draft';
import { ProductDraft } from '../..';
import type { TProductDraft } from '../../../types';

const standardTaxCategoryDraft = TaxCategoryDraft.presets.sampleDataB2CLifestyle
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const cocoaPillowCoverProductTypeDraft =
  ProductTypeDraft.presets.sampleDataB2CLifestyle
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const beddingDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .bedding()
  .build<TCategoryDraft>();

const homeDecorDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .homeDecor()
  .build<TCategoryDraft>();

const cocoaPillowCover = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .key('cocoa-pillow-cover')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Cocoa Pillow Cover')
        ['en-GB']('Cocoa Pillow Cover')
        ['de-DE']('Kissenbezug "Kakao"')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-GB'
        ]('A square linen pillowcase is a type of textile covering for a square-shaped pillow that is typically used to add visual interest and texture to a room. It is made from a natural linen fabric, which is known for its durability, breathability, and classic look.  The pillowcase is designed to fit over a standard size square pillow, usually around 18 inches square.  The linen fabric has a soft and slightly textured surface that adds a cozy and inviting feel to the pillow. The edges of the pillowcase are finished with a neat hem or piping, which adds a polished look to the overall design.  The pillowcase is used to add a touch of warmth and natural elegance to a room, whether it is placed on a bed, a sofa, or an accent chair. It can be used on its own or paired with other decorative pillows in different shapes and colors to create a layered and cohesive look.  Overall, a square linen pillowcase is a versatile and timeless accent piece that can enhance the comfort and style of any room in the home.')
        [
          'en-US'
        ]('A square linen pillowcase is a type of textile covering for a square-shaped pillow that is typically used to add visual interest and texture to a room. It is made from a natural linen fabric, which is known for its durability, breathability, and classic look.  The pillowcase is designed to fit over a standard size square pillow, usually around 18 inches square.  The linen fabric has a soft and slightly textured surface that adds a cozy and inviting feel to the pillow. The edges of the pillowcase are finished with a neat hem or piping, which adds a polished look to the overall design.  The pillowcase is used to add a touch of warmth and natural elegance to a room, whether it is placed on a bed, a sofa, or an accent chair. It can be used on its own or paired with other decorative pillows in different shapes and colors to create a layered and cohesive look.  Overall, a square linen pillowcase is a versatile and timeless accent piece that can enhance the comfort and style of any room in the home.')
        [
          'de-DE'
        ]('Dieser quadratische Kissenbezug aus Leinen besteht aus einem natürlichen Leinenstoff, der für seine Haltbarkeit, Atmungsaktivität und seinen klassischen Look bekannt ist.  Der Kissenbezug ist so konzipiert, dass er über ein quadratisches Kissen in Standardgröße passt, normalerweise etwa 30cm im Quadrat. Der Leinenstoff hat eine weiche und leicht strukturierte Oberfläche, die dem Kissen ein gemütliches und einladendes Gefühl verleiht. Die Kanten des Kissenbezugs sind mit einer Paspelierung versehen, was dem Gesamtdesign einen eleganten Look verleiht.  Der Kissenbezug wird verwendet, um einem Raum einen Hauch von Wärme und natürlicher Eleganz zu verleihen, egal ob er auf einem Bett, einem Sofa oder einem Sessel platziert wird. Er kann alleine verwendet oder mit anderen dekorativen Kissen in verschiedenen Formen und Farben kombiniert werden, um einen mehrschichtigen und zusammenhängenden Look zu schaffen.  Dieser quadratische Kissenbezug aus Leinen ein vielseitiges und zeitloses Accessoire, das den Komfort und Stil jedes Raums im Haus verbessern kann.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('cocoa-pillow-cover')
        ['de-DE']('kakao-kissenbezug')
        ['en-US']('cocoa-pillow-cover')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(cocoaPillowCoverProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategoryDraft.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.cocoaPillowCover01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(beddingDraft.key!),
      KeyReferenceDraft.presets.category().key(homeDecorDraft.key!),
    ]);

export default cocoaPillowCover;
