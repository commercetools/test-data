import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const orionDoubleBed01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('orionDoubleBed01')
    .sku('OTB-07')
    .prices([
      PriceDraft.presets
        .empty()
        .key('159900EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(159900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('159900GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(159900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('159900USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(159900))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Orion_Double_Bed-1.1.jpeg'
        )
        .dimensions({ w: 5000, h: 3621 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Assembly included at delivery\n- Mattress not included',
        'de-DE':
          '- Montage im Lieferumfang enthalten\n- Matratze nicht im Lieferumfang enthalten',
        'en-US': '- Assembly included at delivery\n- Mattress not included',
      }),
      AttributeDraft.random()
        .name('search-color')
        .value([
          {
            'en-US': 'Green',
            'en-GB': 'Green',
            'de-DE': 'Grün',
          },
        ]),
      AttributeDraft.random()
        .name('search-finish')
        .value([
          {
            'en-US': 'Silver',
            'en-GB': 'Silver',
            'de-DE': 'Silber',
          },
        ]),
      AttributeDraft.random().name('color-label').value({
        'en-GB': 'Sage',
        'de-DE': 'Salbei',
        'en-US': 'Sage',
      }),
      AttributeDraft.random().name('finish-label').value({
        'en-GB': 'Silver',
        'de-DE': 'Silber',
        'en-US': 'Silver',
      }),
      AttributeDraft.random().name('color-code').value({
        'en-US': '#BCB88A',
        'en-GB': '#BCB88A',
        'de-DE': '#BCB88A',
      }),
      AttributeDraft.random().name('finish-code').value({
        'en-US': '#C0C0C0',
        'en-GB': '#C0C0C0',
        'de-DE': '#C0C0C0',
      }),
    ]);

export default orionDoubleBed01;
