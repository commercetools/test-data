import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const ivoryLoungeChair01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('ivoryLoungeChair01')
    .sku('ILC-01')
    .prices([
      PriceDraft.presets
        .empty()
        .key('29900EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(29900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('29900GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(29900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('29900USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(29900))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Ivory_Lounge_Chair-1.1.jpeg'
        )
        .dimensions({ w: 5500, h: 4400 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Ivory_Lounge_Chair-1.2.jpeg'
        )
        .dimensions({ w: 3375, h: 4500 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Ivory_Lounge_Chair-1.3.jpeg'
        )
        .dimensions({ w: 3750, h: 5000 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Dry clean only\n- Assembly included in delivery',
        'de-DE':
          '- Nur chemische Reinigung\n- Montage im Lieferumfang enthalten',
        'en-US': '- Dry clean only\n- Assembly included in delivery',
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
      AttributeDraft.random().name('color-label').value({
        'en-GB': 'Ivory',
        'de-DE': 'Elfenbein',
        'en-US': 'Ivory',
      }),
      AttributeDraft.random().name('color-code').value('#FFFFF0'),
    ]);

export default ivoryLoungeChair01;
