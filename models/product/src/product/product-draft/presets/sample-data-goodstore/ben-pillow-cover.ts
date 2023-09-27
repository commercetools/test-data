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
import { ProductVariantDraft } from '../../../../product-variant';
import * as ProductDraft from '../../../product-draft';
import type { TProductDraftBuilder } from '../../../types';

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataGoodStore
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const benPillowCoverProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const beddingDraft = CategoryDraft.presets.sampleDataGoodStore
  .bedding()
  .build<TCategoryDraft>();

const homeDecorDraft = CategoryDraft.presets.sampleDataGoodStore
  .homeDecor()
  .build<TCategoryDraft>();

const benPillowCover = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('ben-pillow-cover')
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Ben Pillow Cover')
        ['de-DE']('Ben Kissenbezug')
        ['en-US']('Ben Pillow Cover')
    )
    .description(
      LocalizedString.presets
        .empty()
        ['en-GB'](
          'The Ben Pillow Cover is a brown linen decorative pillowcase used to add visual interest and texture to a room. It is made from a natural linen fabric, which is known for its durability, breathability, and classic look.  The pillowcase is designed to fit over a standard size rectangle decorative pillow. It features a neutral brown color that can complement a wide variety of decor styles and color schemes.  The linen fabric has a soft and slightly textured surface that adds a cozy and inviting feel to the pillow. The edges of the pillowcase are typically finished with a neat hem, which adds a polished look to the overall design.  The pillowcase is often used to add a touch of warmth and natural elegance to a room, whether it is placed on a bed, a sofa, or an accent chair. It can be used on its own or paired with other decorative pillows in different shapes and colors to create a layered and cohesive look.  Overall, a brown linen decorative pillowcase is a versatile and timeless accent piece that can enhance the comfort and style of any room in the home.'
        )
        ['en-US'](
          'The Ben Pillow Cover is a brown linen decorative pillowcase used to add visual interest and texture to a room. It is made from a natural linen fabric, which is known for its durability, breathability, and classic look.  The pillowcase is designed to fit over a standard size rectangle decorative pillow. It features a neutral brown color that can complement a wide variety of decor styles and color schemes.  The linen fabric has a soft and slightly textured surface that adds a cozy and inviting feel to the pillow. The edges of the pillowcase are typically finished with a neat hem, which adds a polished look to the overall design.  The pillowcase is often used to add a touch of warmth and natural elegance to a room, whether it is placed on a bed, a sofa, or an accent chair. It can be used on its own or paired with other decorative pillows in different shapes and colors to create a layered and cohesive look.  Overall, a brown linen decorative pillowcase is a versatile and timeless accent piece that can enhance the comfort and style of any room in the home.'
        )
        ['de-DE'](
          'Der Ben-Kissenbezug ist ein dekorativer Kissenbezug aus braunem Leinen, der verwendet wird, um einem Raum visuelles Interesse und Struktur zu verleihen. Es besteht aus einem natürlichen Leinenstoff, der für seine Haltbarkeit, Atmungsaktivität und seinen klassischen Look bekannt ist.  Der Kissenbezug ist so konzipiert, dass er über ein rechteckiges dekoratives Kissen in Standardgröße passt. Es verfügt über eine neutrale braune Farbe, die eine Vielzahl von Einrichtungsstilen und Farbschemata ergänzen kann.  Der Leinenstoff hat eine weiche und leicht strukturierte Oberfläche, die dem Kissen ein gemütliches und einladendes Gefühl verleiht. Die Kanten des Kissenbezugs sind in der Regel mit einem sauberen Saum versehen, der dem Gesamtdesign einen eleganten Look verleiht.  Der Kissenbezug wird oft verwendet, um einem Raum einen Hauch von Wärme und natürlicher Eleganz zu verleihen, egal ob er auf einem Bett, einem Sofa oder einem Akzentstuhl platziert wird. Es kann allein verwendet oder mit anderen dekorativen Kissen in verschiedenen Formen und Farben kombiniert werden, um einen mehrschichtigen und zusammenhängenden Look zu schaffen.  Insgesamt ist ein dekorativer Kissenbezug aus braunem Leinen ein vielseitiges und zeitloses Akzentstück, das den Komfort und Stil jedes Raums im Haus verbessern kann.'
        )
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('ben-pillow-cover')
        ['de-DE']('ben-kissenbezug')
        ['en-US']('ben-pillow-cover')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(benPillowCoverProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.benPillowCover01()
    )
    .categories([
      KeyReference.presets.category().key(beddingDraft.key!),
      KeyReference.presets.category().key(homeDecorDraft.key!),
    ]);

export default benPillowCover;
