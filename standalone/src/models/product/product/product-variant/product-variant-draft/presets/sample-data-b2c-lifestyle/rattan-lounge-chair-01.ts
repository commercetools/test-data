import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const rattanLoungeChair01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('rattanLoungeChair01')
    .sku('RLC-08')
    .prices([
      PriceDraft.presets
        .empty()
        .key('19900EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(19900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('19900GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(19900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('19900USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(19900))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Rattan_Lounge_Chair-1.1.jpeg'
        )
        .dimensions({ w: 5000, h: 4000 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Rattan_Lounge_Chair-1.2.jpeg'
        )
        .dimensions({ w: 3375, h: 4500 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Includes 2 cushions for seat and backrest',
        'en-US': '- Includes 2 cushions for seat and backrest',
        'de-DE': '- Inklusive 2 Kissen für Sitz und Rückenlehne',
      }),
      AttributeDraft.random()
        .name('search-color')
        .value([
          {
            'en-US': 'White',
            'en-GB': 'White',
            'de-DE': 'Weiß',
          },
        ]),
      AttributeDraft.random()
        .name('search-finish')
        .value([
          {
            'en-US': 'Yellow',
            'en-GB': 'Yellow',
            'de-DE': 'Gelb',
          },
        ]),
      AttributeDraft.random().name('color-label').value({
        'en-GB': 'Antique White',
        'de-DE': 'Antik-weiß',
        'en-US': 'Antique White',
      }),
      AttributeDraft.random().name('finish-label').value({
        'en-GB': 'Beige',
        'de-DE': 'Beige',
        'en-US': 'Beige',
      }),
      AttributeDraft.random().name('color-code').value({
        'en-US': '#faebd7',
        'en-GB': '#faebd7',
        'de-DE': '#faebd7',
      }),
      AttributeDraft.random().name('finish-code').value({
        'en-US': '#F5F5DC',
        'en-GB': '#F5F5DC',
        'de-DE': '#F5F5DC',
      }),
    ]);

export default rattanLoungeChair01;
