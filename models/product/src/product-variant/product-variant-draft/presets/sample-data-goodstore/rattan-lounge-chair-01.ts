import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const rattanLoungeChair01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('RLC-08')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(19900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(19900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(19900))
        .country('US'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_433585415-Va2aMUo1.jpeg'
        )
        .dimensions({ w: 5000, h: 4000 }),
    ])
    .attributes([
      AttributeDraft.random()
        .name('productspec')
        .value({
          'en-GB': '- Includes 2 cushions for seat and backrest',
          'en-US': '- Includes 2 cushions for seat and backrest',
          'de-DE': '- Inklusive 2 Kissen für Sitz und Rückenlehne',
        }),
      AttributeDraft.random()
        .name('product-description')
        .value({
          'en-GB':
            'The Rattan Lounge Chair is designed to provide comfortable seating for relaxing and lounging. The chair features a sturdy frame made of rattan, with a woven pattern of rattan fibers forming the seat and backrest.  The chair comes with additional cushioning for extra comfort, made from soft cotton fabric. The cushions are removable, allowing for easy cleaning or replacement.  The design of the rattan lounge chair is inspired by tropical or bohemian styles, with a natural and earthy look. The chair features intricate woven patterns or geometric shapes, creating a visually interesting texture.  The rattan material used in the construction of the chair is known for its durability and resistance to wear and tear. It is also lightweight, making it easy to move the chair around the room.  Overall, a rattan lounge chair is a stylish and comfortable addition to any living room or outdoor space. Its natural materials and unique design create a relaxed and inviting atmosphere, making it the perfect place to unwind and enjoy some peace and quiet.',
          'en-US':
            'The Rattan Lounge Chair is designed to provide comfortable seating for relaxing and lounging. The chair features a sturdy frame made of rattan, with a woven pattern of rattan fibers forming the seat and backrest.  The chair comes with additional cushioning for extra comfort, made from soft cotton fabric. The cushions are removable, allowing for easy cleaning or replacement.  The design of the rattan lounge chair is inspired by tropical or bohemian styles, with a natural and earthy look. The chair features intricate woven patterns or geometric shapes, creating a visually interesting texture.  The rattan material used in the construction of the chair is known for its durability and resistance to wear and tear. It is also lightweight, making it easy to move the chair around the room.  Overall, a rattan lounge chair is a stylish and comfortable addition to any living room or outdoor space. Its natural materials and unique design create a relaxed and inviting atmosphere, making it the perfect place to unwind and enjoy some peace and quiet.',
          'de-DE':
            'Der Loungesessel aus Rattan bietet eine bequeme Sitzgelegenheit zum Entspannen. Das Webmuster aus Rattanfasern bildet die Sitzfläche und Rückenlehne, die von einem stabilen Rattangestell gehalten werden. Die Polsterung aus weichem Baumwollstoff sorgt für zusätzlichen Sitzkomfort. Die Kissen sind abnehmbar, was die Reinigung oder einen Austausch erleichtert.  Das Design des Rattan-Loungesessels ist vom tropischen Ambiente des Bohemian-Looks inspiriert und zeigt sich in erdigen Tönen. Das komplexe Webmuster mit seinen geometrischen Formen bildet ein optisches Highlight. Das für die Konstruktion des Sitzmöbels verwendete Rattanmaterial ist langlebig, verschleißfest und leicht. Der Sessel kann somit flexibel in jeden Innen- oder Außenbereich integriert werden. Seine natürlichen Materialien und sein einzigartiges Design schaffen eine entspannte und einladende Atmosphäre zum Relaxen.',
        }),
      AttributeDraft.random()
        .name('color')
        .value({ 'en-GB': '#EDEBE8', 'de-DE': '#EDEBE8', 'en-US': '#EDEBE8' }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({ 'en-GB': 'Pearl', 'de-DE': 'Perle', 'en-US': 'Pearl' }),
      AttributeDraft.random()
        .name('finishlabel')
        .value({ 'en-GB': 'Rattan', 'de-DE': 'Rattan', 'en-US': 'Rattan' }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#808080',
          label: { 'de-DE': 'Grau', 'en-GB': 'Gray', 'en-US': 'Gray' },
        }),
      AttributeDraft.random()
        .name('finish')
        .value({ 'en-GB': '#E0AC58', 'en-US': '#E0AC58', 'de-DE': '#E0AC58' }),
    ]);

export default rattanLoungeChair01;
