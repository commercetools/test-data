import { TBuilder } from '../../../../../../core';
import {
  CategoryDraft,
  TCategoryDraft,
} from '../../../../../category';
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
import { ProductDraft } from '../../../product-draft';
import type { TProductDraft } from '../../../types';

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataB2CLifestyle
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const patternedPillowCoverProductTypeDraft =
  ProductTypeDraft.presets.sampleDataB2CLifestyle
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const beddingDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .bedding()
  .build<TCategoryDraft>();

const homeDecorDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .homeDecor()
  .build<TCategoryDraft>();

const patternedPillowCover = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .key('patterned-pillow-cover')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('Patterned Pillow Cover')
        ['de-DE']('Gemusterter Kissenbezug')
        ['en-US']('Patterned Pillow Cover')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-GB'
        ]('An art deco velvet pillow cover with geometric design is a luxurious and stylish accessory for any room in the home. It is made from soft, plush velvet fabric that feels soft and smooth to the touch. The velvet has a rich, lustrous sheen that adds an elegant and sophisticated touch to the pillow cover.  The pillow cover features a geometric design that is inspired by the art deco style of the early 20th century. The design includes bold and angular shapes.  The pillow cover is often used as a decorative accent for a bed, sofa, or accent chair, and can add a touch of glamour and sophistication to any room in the home. It can be paired with other art deco-inspired accessories, such as lamps, vases, and wall art, to create a cohesive and stylish look.  The velvet fabric is durable and easy to clean, and can be spot cleaned with a damp cloth or sponge. It should be air-dried and fluffed periodically to maintain its shape and texture.  Overall, an art deco velvet pillow cover with geometric design is a luxurious and stylish accessory that can enhance the beauty and comfort of any room in the home.')
        [
          'de-DE'
        ]('Ein Art-Deco-Samtkissenbezug mit geometrischem Muster ist ein luxuriöses und stilvolles Accessoire für jeden Raum in Ihrem Zuhause. Er ist aus weichem, plüschigem Samtstoff gefertigt, der sich weich und glatt anfühlt. Der Samt hat einen reichen, schimmernden Glanz, der dem Kissenbezug eine elegante und anspruchsvolle Note verleiht. Der Kissenbezug weist ein geometrisches Design auf, das vom Art-déco-Stil des frühen 20. Jahrhunderts inspiriert ist. Jahrhunderts inspiriert ist. Das Design umfasst kühne und eckige Formen. Der Kissenbezug wird oft als dekorativer Akzent für ein Bett, ein Sofa oder einen Sessel verwendet und kann jedem Raum im Haus einen Hauch von Glamour und Raffinesse verleihen. Er lässt sich mit anderen vom Art déco inspirierten Accessoires wie Lampen, Vasen und Wandbildern kombinieren, um ein stimmiges und stilvolles Gesamtbild zu schaffen. Der Samtstoff ist strapazierfähig und pflegeleicht und kann mit einem feuchten Tuch oder Schwamm abgewischt werden. Er sollte regelmäßig an der Luft getrocknet und aufgefächert werden, damit er seine Form und Struktur behält.  Insgesamt ist ein Art-Déco-Samtkissenbezug mit geometrischem Muster ein luxuriöses und stilvolles Accessoire, das die Schönheit und den Komfort eines jeden Raums im Haus verbessern kann.')
        [
          'en-US'
        ]('An art deco velvet pillow cover with geometric design is a luxurious and stylish accessory for any room in the home. It is made from soft, plush velvet fabric that feels soft and smooth to the touch. The velvet has a rich, lustrous sheen that adds an elegant and sophisticated touch to the pillow cover.  The pillow cover features a geometric design that is inspired by the art deco style of the early 20th century. The design includes bold and angular shapes.  The pillow cover is often used as a decorative accent for a bed, sofa, or accent chair, and can add a touch of glamour and sophistication to any room in the home. It can be paired with other art deco-inspired accessories, such as lamps, vases, and wall art, to create a cohesive and stylish look.  The velvet fabric is durable and easy to clean, and can be spot cleaned with a damp cloth or sponge. It should be air-dried and fluffed periodically to maintain its shape and texture.  Overall, an art deco velvet pillow cover with geometric design is a luxurious and stylish accessory that can enhance the beauty and comfort of any room in the home.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('patterned-pillow-cover')
        ['de-DE']('gemusterte-kissenhlle')
        ['en-US']('patterned-pillow-cover')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(patternedPillowCoverProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.patternedPillowCover01()
    )
    .variants([
      ProductVariantDraft.presets.sampleDataB2CLifestyle.patternedPillowCover02(),
    ])
    .categories([
      KeyReferenceDraft.presets.category().key(beddingDraft.key!),
      KeyReferenceDraft.presets.category().key(homeDecorDraft.key!),
    ]);

export default patternedPillowCover;
