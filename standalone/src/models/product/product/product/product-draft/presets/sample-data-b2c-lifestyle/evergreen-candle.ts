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

const standardTaxCategoryDraft = TaxCategoryDraft.presets.sampleDataB2CLifestyle
  .standardTaxCategory()
  .build<TTaxCategoryDraft>();

const evergreenCandleProductTypeDraft =
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

const evergreenCandle = (): TBuilder<TProductDraft> =>
  ProductDraft.presets
    .empty()
    .key('evergreen-candle')
    .name(
      LocalizedStringDraft.presets
        .empty()
        ['en-US']('Evergreen Candle')
        ['en-GB']('Evergreen Candle')
        ['de-DE']('Kerze "Evergreen"')
    )
    .description(
      LocalizedStringDraft.presets
        .empty()
        [
          'en-GB'
        ]('The candlestick features a simple, rustic design with a tall, slender shape that is reminiscent of a tree trunk. It may also be decorated with small evergreen branches, berries, and pinecones to create a more natural and organic look.  When the candle is lit, it will cast a warm and cozy glow, creating a festive and inviting atmosphere in any room. The evergreen scent of the candlestick may also be enhanced by the heat of the candle, filling the room with the natural fragrance of pine and wood.  Overall, an evergreen candle stick is a charming and rustic addition to any home during the holiday season. Its natural materials and earthy tones can help to create a warm and inviting atmosphere, while its simple yet elegant design can add a touch of nature to any room.')
        [
          'en-US'
        ]('The candlestick features a simple, rustic design with a tall, slender shape that is reminiscent of a tree trunk. It may also be decorated with small evergreen branches, berries, and pinecones to create a more natural and organic look.  When the candle is lit, it will cast a warm and cozy glow, creating a festive and inviting atmosphere in any room. The evergreen scent of the candlestick may also be enhanced by the heat of the candle, filling the room with the natural fragrance of pine and wood.  Overall, an evergreen candle stick is a charming and rustic addition to any home during the holiday season. Its natural materials and earthy tones can help to create a warm and inviting atmosphere, while its simple yet elegant design can add a touch of nature to any room.')
        [
          'de-DE'
        ]('Dieser Kerzenhalter hat ein schlichtes, rustikales Design mit einer hohen, schlanken Form, die an einen Baumstamm erinnert. Er kann auch mit kleinen immergrünen Zweigen, Beeren und Tannenzapfen dekoriert werden, um ein natürlicheres und organischeres Aussehen zu schaffen.  Wenn die Kerze angezündet wird, wirft sie einen warmen und gemütlichen Schein und schafft eine festliche und einladende Atmosphäre in jedem Raum. Der immergrüne Duft des Kerzenhalters kann auch durch die Wärme der Kerze verstärkt werden und erfüllt den Raum mit dem natürlichen Duft von Kiefer und Holz.  Insgesamt ist ein immergrüner Kerzenhalter während der Weihnachtszeit eine charmante und rustikale Ergänzung für jedes Zuhause. Seine natürlichen Materialien und Erdtöne können dazu beitragen, eine warme und einladende Atmosphäre zu schaffen, während sein einfaches, aber elegantes Design jedem Raum einen Hauch von Natur verleiht.')
    )
    .slug(
      LocalizedStringDraft.presets
        .empty()
        ['en-GB']('evergreen-candle')
        ['de-DE']('immergrne-kerze')
        ['en-US']('evergreen-candle')
    )
    .productType(
      KeyReferenceDraft.presets
        .productType()
        .key(evergreenCandleProductTypeDraft.key!)
    )
    .publish(true)
    .taxCategory(
      KeyReferenceDraft.presets.taxCategory().key(standardTaxCategoryDraft.key!)
    )
    .masterVariant(
      ProductVariantDraft.presets.sampleDataB2CLifestyle.evergreenCandle01()
    )
    .categories([
      KeyReferenceDraft.presets.category().key(homeAccentsDraft.key!),
      KeyReferenceDraft.presets.category().key(roomDecorDraft.key!),
      KeyReferenceDraft.presets.category().key(homeDecorDraft.key!),
    ]);

export default evergreenCandle;
