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
import { ProductDraft } from '../..';
import type { TProductDraft } from '../../../types';

const standardTaxCategory = TaxCategoryDraft.presets.sampleDataB2CLifestyle
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const juteRugProductTypeDraft = ProductTypeDraft.presets.sampleDataB2CLifestyle
  .furnitureAndDecor()
  .build<TProductTypeDraft>();

const rugsDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .rugs()
  .build<TCategoryDraft>();

const roomDecorDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .roomDecor()
  .build<TCategoryDraft>();

const homeDecorDraft = CategoryDraft.presets.sampleDataB2CLifestyle
  .homeDecor()
  .build<TCategoryDraft>();

const juteRug = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .key('jute-rug')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Jute Rug')
        ['en-GB']('Jute Rug')
        ['de-DE']('Jute Teppich')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-GB'
        ]('A jute area rug is a type of rug made from natural fibers derived from the jute plant. Jute is a long, soft, and shiny vegetable fiber that is spun into strong threads and then woven into textiles. Jute rugs are known for their durability and natural appearance, making them a popular choice for those who want to bring a touch of the outdoors into their homes.  Because jute is a natural fiber, it is eco-friendly and sustainable. However, it can be prone to staining and water damage, so jute area rugs should be used in low-traffic areas or rooms that do not see a lot of moisture. They are often used in living rooms, bedrooms, and other spaces where a natural, earthy look is desired.  Overall, a jute area rug is a beautiful and eco-friendly addition to any home. Its natural fibers and earthy appearance make it a popular choice for those who want to create a warm and inviting atmosphere in their living space.')
        [
          'en-US'
        ]('A jute area rug is a type of rug made from natural fibers derived from the jute plant. Jute is a long, soft, and shiny vegetable fiber that is spun into strong threads and then woven into textiles. Jute rugs are known for their durability and natural appearance, making them a popular choice for those who want to bring a touch of the outdoors into their homes.  Because jute is a natural fiber, it is eco-friendly and sustainable. However, it can be prone to staining and water damage, so jute area rugs should be used in low-traffic areas or rooms that do not see a lot of moisture. They are often used in living rooms, bedrooms, and other spaces where a natural, earthy look is desired.  Overall, a jute area rug is a beautiful and eco-friendly addition to any home. Its natural fibers and earthy appearance make it a popular choice for those who want to create a warm and inviting atmosphere in their living space.')
        [
          'de-DE'
        ]('Ein Juteteppich ist eine Art Teppich aus Naturfasern, die aus der Jutepflanze gewonnen werden. Jute ist eine lange, weiche und glänzende Pflanzenfaser, die zu starken Fäden gesponnen und dann zu Textilien gewebt wird. Juteteppiche sind bekannt für ihre Langlebigkeit und ihr natürliches Aussehen, was sie zu einer beliebten Wahl für diejenigen macht, die einen Hauch von Natur in ihr Zuhause bringen möchten.  Da Jute eine Naturfaser ist, ist sie umweltfreundlich und nachhaltig. Es kann jedoch anfällig für Flecken und Wasserschäden sein, daher sollten Juteteppiche in wenig frequentierten Bereichen oder Räumen verwendet werden, die nicht viel Feuchtigkeit ausgesetzt sind. Sie werden oft in Wohnzimmern, Schlafzimmern und anderen Räumen verwendet, in denen ein natürlicher, erdiger Look gewünscht wird.  Insgesamt ist ein Juteteppich eine schöne und umweltfreundliche Ergänzung für jedes Zuhause. Seine natürlichen Fasern und sein erdiges Aussehen machen es zu einer beliebten Wahl für diejenigen, die eine warme und einladende Atmosphäre in ihrem Wohnraum schaffen möchten.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('jute-rug')
        ['en-GB']('jute-rug')
        ['de-DE']('jute-teppich')
    )
    .productType(
      KeyReferenceDraft.presets.productType().key(juteRugProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategory.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.juteRug01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(rugsDraft.key!),
      KeyReferenceDraft.presets.category().key(roomDecorDraft.key!),
      KeyReferenceDraft.presets.category().key(homeDecorDraft.key!),
    ]);

export default juteRug;
