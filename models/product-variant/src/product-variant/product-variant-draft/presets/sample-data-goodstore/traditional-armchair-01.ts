import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const traditionalArmchair01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('TARM-034')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(29900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(29900))
        .country('GB'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305688619-r47M4s9Q.jpeg'
        )
        .dimensions({ w: 2500, h: 2500 }),
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305687866-ED2hLSUD.jpeg'
        )
        .dimensions({ w: 2500, h: 2500 }),
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305688508-6hRWGih2.jpeg'
        )
        .dimensions({ w: 5760, h: 3840 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Cotton upholstery',
        'de-DE': '- Baumwollpolsterung',
        'en-US': '- Cotton upholstery',
      }),
      AttributeDraft.random().name('product-description').value({
        'en-GB':
          'A traditional armchair with a geometric pattern has a classic design with a touch of modern flair. The chair has a wooden frame and legs. The chair has a high back, providing a comfortable place to sit and relax. The cushioning is plush, offering a soft feel to the seat and backrest. The geometric pattern adds a visual interest and texture to the overall look of the chair, providing a subtle yet eye-catching element to the decor of the room.  Overall, a traditional armchair with a geometric pattern could be a great addition to a living room, study, or bedroom, offering both comfort and style to the space.',
        'en-US':
          'A traditional armchair with a geometric pattern has a classic design with a touch of modern flair. The chair has a wooden frame and legs. The chair has a high back, providing a comfortable place to sit and relax. The cushioning is plush, offering a soft feel to the seat and backrest. The geometric pattern adds a visual interest and texture to the overall look of the chair, providing a subtle yet eye-catching element to the decor of the room.  Overall, a traditional armchair with a geometric pattern could be a great addition to a living room, study, or bedroom, offering both comfort and style to the space.',
        'de-DE':
          'Ein traditioneller Sessel mit geometrischem Muster hat ein klassisches Design mit einem Hauch von modernem Flair. Der Stuhl hat einen Rahmen und Beine aus Holz. Der Stuhl hat eine hohe Rückenlehne, die einen bequemen Platz zum Sitzen und Entspannen bietet. Die Polsterung ist weich und bietet ein weiches Gefühl für Sitz und Rückenlehne. Das geometrische Muster fügt dem Gesamtbild des Stuhls ein visuelles Interesse und eine Textur hinzu und verleiht dem Dekor des Raums ein subtiles, aber auffälliges Element.  Insgesamt könnte ein traditioneller Sessel mit geometrischem Muster eine großartige Ergänzung für ein Wohn-, Arbeits- oder Schlafzimmer sein und dem Raum sowohl Komfort als auch Stil verleihen.',
      }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#F5F5DC',
          label: { 'de-DE': 'Beige', 'en-GB': 'Beige', 'en-US': 'Beige' },
        }),
      AttributeDraft.random()
        .name('color')
        .value({ 'en-GB': '#D0C1B0', 'de-DE': '#D0C1B0', 'en-US': '#D0C1B0' }),
      AttributeDraft.random().name('colorlabel').value({
        'en-GB': 'Eggshell',
        'de-DE': 'Eierschale',
        'en-US': 'Eggshell',
      }),
    ]);

export default traditionalArmchair01;
