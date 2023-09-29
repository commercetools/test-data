import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const ellaSquarePlate01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('ESP-1')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(1599))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(1599))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(1599))
        .country('US'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_96107425-uNhRfSVg.jpeg'
        )
        .dimensions({ w: 5692, h: 3412 }),
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_297660480-6pQH9vjF.jpeg'
        )
        .dimensions({ w: 7360, h: 4912 }),
    ])
    .attributes([
      AttributeDraft.random()
        .name('productspec')
        .value({
          'en-GB': '- Includes 1 plate',
          'en-US': '- Includes 1 plate',
          'de-DE': '- Enthält 1 Teller',
        }),
      AttributeDraft.random()
        .name('product-description')
        .value({
          'de-DE':
            'Dieser quadratische Teller "Ella" ist ideal zum Servieren oder Präsentieren von Speisen, von Vorspeisen und Hauptgerichten bis hin zu Desserts und Snacks. Er kann sowohl für formelle als auch für ungezwungene Anlässe verwendet werden, und seine Einfachheit und Vielseitigkeit machen ihn zu einer beliebten Wahl für viele verschiedene Arten von Küchen.  Insgesamt ist ein quadratischer Keramikteller eine funktionale und stilvolle Wahl zum Servieren von Mahlzeiten und kann jedem Speiseerlebnis einen Hauch von Eleganz verleihen.',
          'en-GB':
            'This Ella square ceramic plate is a flat, four-sided dish ideal for serving or displaying food. A flat square serving plate is ideal for serving a variety of foods, from appetizers and main courses to desserts and snacks. It can be used for both formal and casual occasions, and its simplicity and versatility make it a popular choice for many different types of cuisines.  Overall, a square ceramic plate is a functional and stylish choice for serving meals and can add a touch of elegance to any dining experience.',
          'en-US':
            'This Ella square ceramic plate is a flat, four-sided dish ideal for serving or displaying food. A flat square serving plate is ideal for serving a variety of foods, from appetizers and main courses to desserts and snacks. It can be used for both formal and casual occasions, and its simplicity and versatility make it a popular choice for many different types of cuisines.  Overall, a square ceramic plate is a functional and stylish choice for serving meals and can add a touch of elegance to any dining experience.',
        }),
      AttributeDraft.random()
        .name('color')
        .value({ 'en-GB': '#FFF', 'de-DE': '#FFF', 'en-US': '#FFF' }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({ 'en-GB': 'White', 'de-DE': 'Weiß', 'en-US': 'White' }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#FFF',
          label: { 'de-DE': 'Weiss', 'en-GB': 'White', 'en-US': 'White' },
        }),
    ]);

export default ellaSquarePlate01;
