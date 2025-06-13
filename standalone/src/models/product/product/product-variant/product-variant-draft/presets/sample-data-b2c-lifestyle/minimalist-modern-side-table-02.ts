import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const minimalistModernSideTable02 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('minimalistModernSideTable02')
    .sku('MMST-02')
    .prices([
      PriceDraft.presets
        .empty()
        .key('4999EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(4999))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('4999GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(4999))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('4999USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(4999))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Minimalist_Modern_Side_Table-2.1.jpeg'
        )
        .dimensions({ w: 5883, h: 6026 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-US': '- 4 legged side table\n- Walnut legs\n- Pre-assembled',
        'en-GB': '- 4 legged side table\n- Walnut legs\n- Pre-assembled',
        'de-DE': '- 4 legged side table\n- Walnut legs\n- Pre-assembled',
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
        'en-GB': 'Goldene Rute',
        'de-DE': 'Golden Rod',
        'en-US': 'Golden Rod',
      }),
      AttributeDraft.random().name('finish-label').value({
        'en-GB': 'Sattel braun',
        'de-DE': 'Saddle Brown',
        'en-US': 'Saddle Brown',
      }),
      AttributeDraft.random().name('color-code').value({
        'en-US': '#DAA520',
        'en-GB': '#DAA520',
        'de-DE': '#DAA520',
      }),
      AttributeDraft.random().name('finish-code').value({
        'en-US': '#8b4513',
        'en-GB': '#8b4513',
        'de-DE': '#8b4513',
      }),
    ]);

export default minimalistModernSideTable02;
