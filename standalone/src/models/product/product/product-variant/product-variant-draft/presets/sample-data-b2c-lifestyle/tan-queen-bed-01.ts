import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const tanQueenBed01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('tanQueenBed01')
    .sku('LPQB-084')
    .prices([
      PriceDraft.presets
        .empty()
        .key('129900EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(129900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('129900GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(129900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('129900USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(129900))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Tan_Queen_Bed-1.1.jpeg'
        )
        .dimensions({ w: 5000, h: 3621 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Assembly included in delivery',
        'en-US': '- Assembly included in delivery',
        'de-DE': '- Montage im Lieferumfang enthalten',
      }),
      AttributeDraft.random()
        .name('search-color')
        .value([
          {
            'en-US': 'Yellow',
            'en-GB': 'Yellow',
            'de-DE': 'Gelb',
          },
        ]),
      AttributeDraft.random()
        .name('search-finish')
        .value([
          {
            'en-US': 'Brown',
            'en-GB': 'Brown',
            'de-DE': 'Braun',
          },
        ]),
      AttributeDraft.random().name('color-label').value({
        'en-GB': 'Tan',
        'de-DE': 'Bräunen',
        'en-US': 'Tan',
      }),
      AttributeDraft.random().name('finish-label').value({
        'en-GB': 'Saddle Brown',
        'de-DE': 'Sattel braun',
        'en-US': 'Saddle Brown',
      }),
      AttributeDraft.random().name('color-code').value('#D2B48C'),
      AttributeDraft.random().name('finish-code').value('#8b4513'),
    ]);

export default tanQueenBed01;
