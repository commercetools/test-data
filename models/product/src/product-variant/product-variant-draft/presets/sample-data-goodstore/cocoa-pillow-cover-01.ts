import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const cocoaPillowCover01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('BLPC-09')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(1099))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(1099))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(1099))
        .country('US'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Cocoa%20Pillow%20Cover-W9ZgnFgU.jpeg'
        )
        .dimensions({ w: 6240, h: 4160 }),
    ])
    .attributes([
      AttributeDraft.random()
        .name('productspec')
        .value({
          'en-GB': '- Machine washable\n- Pillow not included',
          'en-US': '- Machine washable\n- Pillow not included',
          'de-DE':
            '- Waschmaschinenfest\n- Kissen nicht im Lieferumfang enthalten',
        }),
      AttributeDraft.random()
        .name('product-description')
        .value({
          'en-GB':
            'A square linen pillowcase is a type of textile covering for a square-shaped pillow that is typically used to add visual interest and texture to a room. It is made from a natural linen fabric, which is known for its durability, breathability, and classic look.  The pillowcase is designed to fit over a standard size square pillow, usually around 18 inches square.  The linen fabric has a soft and slightly textured surface that adds a cozy and inviting feel to the pillow. The edges of the pillowcase are finished with a neat hem or piping, which adds a polished look to the overall design.  The pillowcase is used to add a touch of warmth and natural elegance to a room, whether it is placed on a bed, a sofa, or an accent chair. It can be used on its own or paired with other decorative pillows in different shapes and colors to create a layered and cohesive look.  Overall, a square linen pillowcase is a versatile and timeless accent piece that can enhance the comfort and style of any room in the home.',
          'en-US':
            'A square linen pillowcase is a type of textile covering for a square-shaped pillow that is typically used to add visual interest and texture to a room. It is made from a natural linen fabric, which is known for its durability, breathability, and classic look.  The pillowcase is designed to fit over a standard size square pillow, usually around 18 inches square.  The linen fabric has a soft and slightly textured surface that adds a cozy and inviting feel to the pillow. The edges of the pillowcase are finished with a neat hem or piping, which adds a polished look to the overall design.  The pillowcase is used to add a touch of warmth and natural elegance to a room, whether it is placed on a bed, a sofa, or an accent chair. It can be used on its own or paired with other decorative pillows in different shapes and colors to create a layered and cohesive look.  Overall, a square linen pillowcase is a versatile and timeless accent piece that can enhance the comfort and style of any room in the home.',
          'de-DE':
            'Dieser quadratische Kissenbezug aus Leinen besteht aus einem natürlichen Leinenstoff, der für seine Haltbarkeit, Atmungsaktivität und seinen klassischen Look bekannt ist.  Der Kissenbezug ist so konzipiert, dass er über ein quadratisches Kissen in Standardgröße passt, normalerweise etwa 30cm im Quadrat. Der Leinenstoff hat eine weiche und leicht strukturierte Oberfläche, die dem Kissen ein gemütliches und einladendes Gefühl verleiht. Die Kanten des Kissenbezugs sind mit einer Paspelierung versehen, was dem Gesamtdesign einen eleganten Look verleiht.  Der Kissenbezug wird verwendet, um einem Raum einen Hauch von Wärme und natürlicher Eleganz zu verleihen, egal ob er auf einem Bett, einem Sofa oder einem Sessel platziert wird. Er kann alleine verwendet oder mit anderen dekorativen Kissen in verschiedenen Formen und Farben kombiniert werden, um einen mehrschichtigen und zusammenhängenden Look zu schaffen.  Dieser quadratische Kissenbezug aus Leinen ein vielseitiges und zeitloses Accessoire, das den Komfort und Stil jedes Raums im Haus verbessern kann.',
        }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#808080',
          label: { 'de-DE': 'Grau', 'en-GB': 'Gray', 'en-US': 'Gray' },
        }),
      AttributeDraft.random()
        .name('color')
        .value({
          'en-GB': '#A1947C ',
          'de-DE': '#A1947C ',
          'en-US': '#A1947C ',
        }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({ 'en-GB': 'Tweed', 'de-DE': 'Tweed', 'en-US': 'Tweed' }),
    ]);

export default cocoaPillowCover01;
