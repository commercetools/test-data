import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const cloudQueenBed01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('CQB-09')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(45999))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(45999))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(45999))
        .country('US'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_523480805-mqjgJyAt.jpeg'
        )
        .dimensions({ w: 5000, h: 3621 }),
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Cloud%20Queen%20Bed-Hz3YEb5q.jpeg'
        )
        .dimensions({ w: 5000, h: 3621 }),
    ])
    .attributes([
      AttributeDraft.random().name('colorlabel').value({
        'en-GB': 'Light Blue',
        'de-DE': 'Hellblau',
        'en-US': 'Light Blue',
      }),
      AttributeDraft.random()
        .name('color')
        .value({ 'en-GB': '#D4EEF2', 'de-DE': '#D4EEF2', 'en-US': '#D4EEF2' }),
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Assembly is included',
        'en-US': '- Assembly is included',
        'de-DE': '- Die Montage ist im Preis inbegriffen',
      }),
      AttributeDraft.random().name('product-description').value({
        'en-GB':
          'A queen-sized bed with fabric upholstery and a pillow-like headboard is a comfortable and elegant piece of bedroom furniture. The bed frame is rectangular and large enough to accommodate a standard queen-sized mattress. The fabric upholstery covers the entire frame, creating a smooth and comfortable surface to lean against. The headboard is the centerpiece of the bed, with a soft and plush surface that resembles a pillow. It is rectangular in shape and attached to the top of the bed frame, providing a comfortable backrest for reading or watching TV in bed. The headboard may be upholstered in the same fabric as the bed frame or in a complementary color or pattern. Overall, this bed combines comfort and style, making it a perfect addition to any bedroom.',
        'en-US':
          'A queen-sized bed with fabric upholstery and a pillow-like headboard is a comfortable and elegant piece of bedroom furniture. The bed frame is rectangular and large enough to accommodate a standard queen-sized mattress. The fabric upholstery covers the entire frame, creating a smooth and comfortable surface to lean against. The headboard is the centerpiece of the bed, with a soft and plush surface that resembles a pillow. It is rectangular in shape and attached to the top of the bed frame, providing a comfortable backrest for reading or watching TV in bed. The headboard may be upholstered in the same fabric as the bed frame or in a complementary color or pattern. Overall, this bed combines comfort and style, making it a perfect addition to any bedroom.',
        'de-DE':
          'Ein Queensize-Bett mit Stoffbezug und kissenartigem Kopfteil ist ein komfortables und elegantes Schlafzimmermöbel. Der Bettrahmen ist rechteckig und groß genug, um eine Standardmatratze in Queen-Size-Größe aufzunehmen. Die Stoffpolsterung bedeckt den gesamten Rahmen und schafft eine glatte und bequeme Oberfläche zum Anlehnen. Das Kopfteil ist das Herzstück des Bettes, mit einer weichen und plüschigen Oberfläche, die einem Kissen ähnelt. Es hat eine rechteckige Form und ist oben am Bettrahmen befestigt und bietet eine bequeme Rückenlehne zum Lesen oder Fernsehen im Bett. Das Kopfteil kann mit dem gleichen Stoff wie der Bettrahmen oder in einer komplementären Farbe oder einem Muster bezogen werden. Insgesamt vereint dieses Bett Komfort und Stil und ist somit eine perfekte Ergänzung für jedes Schlafzimmer.',
      }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#0000FF',
          label: { 'de-DE': 'Blau', 'en-GB': 'Blue', 'en-US': 'Blue' },
        }),
    ]);

export default cloudQueenBed01;
