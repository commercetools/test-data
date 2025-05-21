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

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataB2CLifestyle
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const idunPillowCoverProductTypeDraft =
  ProductTypeDraft.presets.sampleDataB2CLifestyle
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const beddingDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .bedding()
  .build<TCategoryDraft>();

const homeDecorDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .homeDecor()
  .build<TCategoryDraft>();

const idunPillowCover = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .key('idun-pillow-cover')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Idun Pillow Cover')
        ['en-GB']('Idun Pillow Cover')
        ['de-DE']('Idun Kissenbezug')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-GB'
        ]('A brown velvet pillowcase is a type of textile covering for a decorative pillow that is typically used to add visual interest, texture, and a touch of luxury to a room. It is made from a soft and plush velvet fabric, which is known for its smooth surface, rich color, and lustrous sheen.  The pillowcase is designed to fit over a standard size decorative pillow, usually around 18 inches square. It features a square shape and a warm brown color that can complement a variety of decor styles and color schemes.  The velvet fabric has a silky and luxurious feel that adds a touch of sophistication and elegance to the pillow. The edges of the pillowcase are typically finished with a neat hem, which adds a polished look to the overall design.  The pillowcase is often used to create a cozy and inviting atmosphere in a room, whether it is placed on a bed, a sofa, or an accent chair. It can be used on its own or paired with other decorative pillows in different textures and colors to create a layered and harmonious look.  Overall, a brown velvet pillowcase is a beautiful and indulgent accent piece that can enhance the comfort and style of any room in the home.')
        [
          'en-US'
        ]('A brown velvet pillowcase is a type of textile covering for a decorative pillow that is typically used to add visual interest, texture, and a touch of luxury to a room. It is made from a soft and plush velvet fabric, which is known for its smooth surface, rich color, and lustrous sheen.  The pillowcase is designed to fit over a standard size decorative pillow, usually around 18 inches square. It features a square shape and a warm brown color that can complement a variety of decor styles and color schemes.  The velvet fabric has a silky and luxurious feel that adds a touch of sophistication and elegance to the pillow. The edges of the pillowcase are typically finished with a neat hem, which adds a polished look to the overall design.  The pillowcase is often used to create a cozy and inviting atmosphere in a room, whether it is placed on a bed, a sofa, or an accent chair. It can be used on its own or paired with other decorative pillows in different textures and colors to create a layered and harmonious look.  Overall, a brown velvet pillowcase is a beautiful and indulgent accent piece that can enhance the comfort and style of any room in the home.')
        [
          'de-DE'
        ]('Ein brauner Samt-Kissenbezug ist eine Art Textilbezug für ein dekoratives Kissen, das normalerweise verwendet wird, um einem Raum visuelles Interesse, Textur und einen Hauch von Luxus zu verleihen. Es besteht aus einem weichen und plüschigen Samtstoff, der für seine glatte Oberfläche, seine satte Farbe und seinen glänzenden Schimmer bekannt ist. Der Kissenbezug ist so konzipiert, dass er über ein dekoratives Kissen in Standardgröße passt, normalerweise etwa 18 Zoll im Quadrat. Er hat eine quadratische Form und eine warme braune Farbe, die eine Vielzahl von Einrichtungsstilen und Farbschemata ergänzen kann. Der Samtstoff fühlt sich seidig und luxuriös an und verleiht dem Kissen einen Hauch von Raffinesse und Eleganz. Die Kanten des Kissenbezugs sind in der Regel mit einem sauberen Saum versehen, der dem Gesamtdesign einen eleganten Look verleiht. Der Kissenbezug wird oft verwendet, um eine gemütliche und einladende Atmosphäre in einem Raum zu schaffen, egal ob er auf einem Bett, einem Sofa oder einem Akzentstuhl platziert wird. Er kann allein oder in Kombination mit anderen dekorativen Kissen in verschiedenen Texturen und Farben verwendet werden, um ein mehrschichtiges und harmonisches Aussehen zu schaffen. Insgesamt ist ein Kissenbezug aus braunem Samt ein wunderschönes und luxuriöses Accessoire, das den Komfort und den Stil eines jeden Raumes im Haus verbessern kann. ')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('idun-pillow-cover')
        ['en-GB']('idun-pillow-cover')
        ['de-DE']('idun-kissenbezug')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(idunPillowCoverProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.idunPillowCover01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(beddingDraft.key!),
      KeyReferenceDraft.presets.category().key(homeDecorDraft.key!),
    ]);

export default idunPillowCover;
