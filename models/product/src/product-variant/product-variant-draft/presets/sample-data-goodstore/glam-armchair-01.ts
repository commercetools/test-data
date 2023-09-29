import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const glamArmchair01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('GARM-093')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(59900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(59900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(59900))
        .country('US'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_379387886-WRoNTpOE.jpeg'
        )
        .dimensions({ w: 5500, h: 4400 }),
    ])
    .attributes([
      AttributeDraft.random()
        .name('productspec')
        .value({
          'en-GB': '- Dry clean only\n- Pillow included',
          'en-US': '- Dry clean only\n- Pillow included',
          'de-DE': '- Nur chemische Reinigung\n- Kissen inklusive',
        }),
      AttributeDraft.random()
        .name('product-description')
        .value({
          'en-GB':
            'A gold velvet chair with a brass frame is an elegant and luxurious piece of furniture. The soft, plush velvet material of the chair provides a comfortable and cozy seating experience. The gold color of the velvet fabric is soft and delicate, adding a touch of glamour to the overall look of the chair.  The brass frame of the chair is sturdy and durable, providing a solid foundation for the seating area. The brass color of the frame adds a touch of warmth and sophistication to the overall look of the chair. The combination of the gold velvet and brass frame creates a striking contrast, making this chair a statement piece in any room.  The chair features a high backrest with a curved design, providing support for the back and shoulders. The armrests are also curved, providing a comfortable place to rest the arms. The chair is designed for both style and comfort, making it a great addition to any living room, bedroom, or office space.',
          'en-US':
            'A gold velvet chair with a brass frame is an elegant and luxurious piece of furniture. The soft, plush velvet material of the chair provides a comfortable and cozy seating experience. The gold color of the velvet fabric is soft and delicate, adding a touch of glamour to the overall look of the chair.  The brass frame of the chair is sturdy and durable, providing a solid foundation for the seating area. The brass color of the frame adds a touch of warmth and sophistication to the overall look of the chair. The combination of the gold velvet and brass frame creates a striking contrast, making this chair a statement piece in any room.  The chair features a high backrest with a curved design, providing support for the back and shoulders. The armrests are also curved, providing a comfortable place to rest the arms. The chair is designed for both style and comfort, making it a great addition to any living room, bedroom, or office space.',
          'de-DE':
            'Ein goldfarbener Samtstuhl mit Messingrahmen ist ein elegantes und luxuriöses Möbelstück. Das weiche, plüschige Samtmaterial des Stuhls sorgt für ein bequemes und gemütliches Sitzerlebnis. Die goldene Farbe des Samtstoffs ist weich und zart und verleiht dem Gesamtbild des Stuhls einen Hauch von Glamour.  Der Messingrahmen des Stuhls ist robust und langlebig und bietet eine solide Grundlage für den Sitzbereich. Die Messingfarbe des Gestells verleiht dem Gesamtbild des Stuhls einen Hauch von Wärme und Raffinesse. Die Kombination aus Goldsamt und Messingrahmen schafft einen auffälligen Kontrast und macht diesen Stuhl zu einem Statement-Piece in jedem Raum.  Der Stuhl verfügt über eine hohe Rückenlehne mit geschwungenem Design, die Rücken und Schultern stützt. Die Armlehnen sind ebenfalls gebogen und bieten eine bequeme Ablagefläche für die Arme. Der Stuhl ist sowohl stilvoll als auch auf Komfort ausgelegt, was ihn zu einer großartigen Ergänzung für jedes Wohnzimmer, Schlafzimmer oder Büro macht.',
        }),
      AttributeDraft.random()
        .name('color')
        .value({ 'en-GB': '#FECB69', 'de-DE': '#FECB69', 'en-US': '#FECB69' }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({ 'en-GB': 'Gold', 'de-DE': 'Gold', 'en-US': 'Gold' }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#FFD700',
          label: { 'de-DE': 'Gold', 'en-GB': 'Gold', 'en-US': 'Gold' },
        }),
      AttributeDraft.random()
        .name('finish')
        .value({ 'en-GB': '#FFDF7F', 'en-US': '#FFDF7F', 'de-DE': '#FFDF7F' }),
      AttributeDraft.random()
        .name('finishlabel')
        .value({ 'en-GB': 'Brass', 'de-DE': 'Messing', 'en-US': 'Brass' }),
    ]);

export default glamArmchair01;
