import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const minimalistModernSideTable01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('minimalistModernSideTable01')
    .sku('MMST-01')
    .prices([
      PriceDraft.presets
        .empty()
        .key('12000EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(12000))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('12000GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(12000))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('12000USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(12000))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Minimalist_Modern_Side_Table-1.1.jpeg'
        )
        .dimensions({ w: 6000, h: 6232 }),
    ])
    .attributes([
      AttributeDraft.random().name('color').value({
        'en-US': 'White:#FFFFFF',
        'en-GB': 'Weiß:#FFFFFF',
        'de-DE': 'White:#FFFFFF',
      }),
      AttributeDraft.random().name('finish').value({
        'en-US': 'Saddle Brown:#8b4513',
        'en-GB': 'Sattel braun:#8b4513',
        'de-DE': 'Saddle Brown:#8b4513',
      }),
      AttributeDraft.random().name('productspec').value({
        'en-US': '- 4 legged side table\n- Walnut legs\n- Pre-assembled',
        'en-GB': '- 4 legged side table\n- Walnut legs\n- Pre-assembled',
        'de-DE': '- 4 legged side table\n- Walnut legs\n- Pre-assembled',
      }),
    ]);

export default minimalistModernSideTable01;
