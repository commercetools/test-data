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

const patternedPillowCoverProductTypeDraft =
  ProductTypeDraft.presets.sampleDataGoodStore
    .furnitureAndDecor()
    .build<TProductTypeDraft>();

const beddingDraft = CategoryDraft.presets.sampleDataGoodStore
  .bedding()
  .build<TCategoryDraft>();

const homeDecorDraft = CategoryDraft.presets.sampleDataGoodStore
  .homeDecor()
  .build<TCategoryDraft>();

const patternedPillowCover = (): TProductDraftBuilder =>
  ProductDraft.presets
    .empty()
    .key('patterned-pillow-cover')
    .name(
      LocalizedString.presets
        .empty()
        ['en-GB']('Patterned Pillow Cover')
        ['de-DE']('Gemusterte Kissenhülle')
        ['en-US']('Patterned Pillow Cover')
    )
    .description(
      LocalizedString.presets
        .empty()
        ['en-GB'](
          'An art deco velvet pillow cover with geometric design is a luxurious and stylish accessory for any room in the home. It is made from soft, plush velvet fabric that feels soft and smooth to the touch. The velvet has a rich, lustrous sheen that adds an elegant and sophisticated touch to the pillow cover.  The pillow cover features a geometric design that is inspired by the art deco style of the early 20th century. The design includes bold and angular shapes.  The pillow cover is often used as a decorative accent for a bed, sofa, or accent chair, and can add a touch of glamour and sophistication to any room in the home. It can be paired with other art deco-inspired accessories, such as lamps, vases, and wall art, to create a cohesive and stylish look.  The velvet fabric is durable and easy to clean, and can be spot cleaned with a damp cloth or sponge. It should be air-dried and fluffed periodically to maintain its shape and texture.  Overall, an art deco velvet pillow cover with geometric design is a luxurious and stylish accessory that can enhance the beauty and comfort of any room in the home.'
        )
        ['de-DE'](
          'Ein Art-Deco-Kissenbezug aus Samt mit geometrischem Design ist ein luxuriöses und stilvolles Accessoire für jeden Raum im Haus. Es besteht aus weichem, plüschigem Samtstoff, der sich weich und glatt anfühlt. Der Samt hat einen satten, glänzenden Glanz, der dem Kissenbezug eine elegante und anspruchsvolle Note verleiht.  Der Kissenbezug verfügt über ein geometrisches Design, das vom Art-Deco-Stil des frühen 20. Jahrhunderts inspiriert ist. Das Design umfasst kühne und eckige Formen.  Der Kissenbezug wird oft als dekorativer Akzent für ein Bett, ein Sofa oder einen Akzentstuhl verwendet und kann jedem Raum im Haus einen Hauch von Glamour und Raffinesse verleihen. Es kann mit anderen Art-déco-inspirierten Accessoires wie Lampen, Vasen und Wandkunst kombiniert werden, um einen zusammenhängenden und stilvollen Look zu schaffen.  Der Samtstoff ist strapazierfähig und leicht zu reinigen und kann punktuell mit einem feuchten Tuch oder Schwamm gereinigt werden. Es sollte regelmäßig an der Luft getrocknet und aufgelockert werden, um seine Form und Textur zu erhalten.  Insgesamt ist ein Art-Deco-Kissenbezug aus Samt mit geometrischem Design ein luxuriöses und stilvolles Accessoire, das die Schönheit und den Komfort jedes Raums im Haus verbessern kann.'
        )
        ['en-US'](
          'An art deco velvet pillow cover with geometric design is a luxurious and stylish accessory for any room in the home. It is made from soft, plush velvet fabric that feels soft and smooth to the touch. The velvet has a rich, lustrous sheen that adds an elegant and sophisticated touch to the pillow cover.  The pillow cover features a geometric design that is inspired by the art deco style of the early 20th century. The design includes bold and angular shapes.  The pillow cover is often used as a decorative accent for a bed, sofa, or accent chair, and can add a touch of glamour and sophistication to any room in the home. It can be paired with other art deco-inspired accessories, such as lamps, vases, and wall art, to create a cohesive and stylish look.  The velvet fabric is durable and easy to clean, and can be spot cleaned with a damp cloth or sponge. It should be air-dried and fluffed periodically to maintain its shape and texture.  Overall, an art deco velvet pillow cover with geometric design is a luxurious and stylish accessory that can enhance the beauty and comfort of any room in the home.'
        )
    )
    .slug(
      LocalizedString.presets
        .empty()
        ['en-GB']('patterned-pillow-cover')
        ['de-DE']('gemusterte-kissenhlle')
        ['en-US']('patterned-pillow-cover')
    )
    .productType(
      KeyReference.presets
        .productType()
        .key(patternedPillowCoverProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReference.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataGoodStore.patternedPillowCover01()
    )
    .variants([
      ProductVariantDraft.presets.sampleDataGoodStore.patternedPillowCover02(),
    ])
    .categories([
      KeyReference.presets.category().key(beddingDraft.key!),
      KeyReference.presets.category().key(homeDecorDraft.key!),
    ]);

export default patternedPillowCover;