import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const turnerVelvetArmchair01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('TARM-03')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(39900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(39900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(39900))
        .country('US'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305709767-0-udvSbN.jpeg'
        )
        .dimensions({ w: 2500, h: 2500 }),
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305709866-REVRy5ph.jpeg'
        )
        .dimensions({ w: 2500, h: 2500 }),
    ])
    .attributes([
      AttributeDraft.random()
        .name('productspec')
        .value({
          'en-GB': '- Dry clean only',
          'en-US': '- Dry clean only',
          'de-DE': '- Nur chemische Reinigung',
        }),
      AttributeDraft.random()
        .name('product-description')
        .value({
          'en-GB':
            'A velvet chair with ebony legs is an elegant and luxurious piece of furniture. The soft, plush velvet material of the chair provides a comfortable and cozy seating experience. The dark blue color of the velvet fabric is soft and delicate, adding a touch of modernity to the overall look of the chair.  The ebony legs of the chair are sturdy and durable, providing a solid foundation for the seating area. The ebony color of the frame adds a touch of sophistication to the overall look of the chair. The combination of the velvet and ebony creates a striking contrast, making this chair a statement piece in any room.  The chair features a high backrest with a curved design, providing support for the back and shoulders. The armrests are also curved, providing a comfortable place to rest the arms. The chair is designed for both style and comfort, making it a great addition to any living room, bedroom, or office space.',
          'en-US':
            'A velvet chair with ebony legs is an elegant and luxurious piece of furniture. The soft, plush velvet material of the chair provides a comfortable and cozy seating experience. The dark blue color of the velvet fabric is soft and delicate, adding a touch of modernity to the overall look of the chair.  The ebony legs of the chair are sturdy and durable, providing a solid foundation for the seating area. The ebony color of the frame adds a touch of sophistication to the overall look of the chair. The combination of the velvet and ebony creates a striking contrast, making this chair a statement piece in any room.  The chair features a high backrest with a curved design, providing support for the back and shoulders. The armrests are also curved, providing a comfortable place to rest the arms. The chair is designed for both style and comfort, making it a great addition to any living room, bedroom, or office space.',
          'de-DE':
            'Das Samt-Sitzmöbel mit Beinen aus Ebenholz ist ein elegantes und luxuriöses Möbelstück. Das weiche, plüschige Samtmaterial des Stuhls sorgt für ein bequemes und gemütliches Sitzerlebnis. Die dunkelblaue Farbe des Samtstoffs ist weich und zart und verleiht dem Gesamtbild des Stuhls einen modernen Touch.  Die Ebenholzbeine des Sessels sind robust und langlebig und bilden eine solide Grundlage für den Sitzbereich. Die Ebenholzfarbe des Gestells verleiht dem Gesamtbild des Stuhls die gewünschte Raffinesse. Die Kombination aus Samt und Ebenholz schafft einen interessanten Kontrast und macht diesen Stuhl zu einem Statement-Piece in jedem Raum.  Der Sessel hat eine hohe Rückenlehne mit geschwungenem Design, die Rücken und Schultern stützt. Die Armlehnen sind ebenfalls gebogen und bieten eine bequeme Ablagefläche für die Arme. Der Sessel ist sowohl auf Stil als auch auf Komfort ausgelegt, was ihn zu einer großartigen Ergänzung für jedes Wohnzimmer, Schlafzimmer oder Büro macht.',
        }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({
          'en-GB': 'Royal Blue',
          'de-DE': 'Königsblau',
          'en-US': 'Royal Blue',
        }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#0000FF',
          label: { 'de-DE': 'Blau', 'en-GB': 'Blue', 'en-US': 'Blue' },
        }),
      AttributeDraft.random()
        .name('color')
        .value({ 'en-GB': '#405A76', 'de-DE': '#405A76', 'en-US': '#405A76' }),
    ]);

export default turnerVelvetArmchair01;
