import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const minimalistCedarNightstand01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('minimalistCedarNightstand01')
    .sku('CNS-0434')
    .prices([
      PriceDraft.presets
        .empty()
        .key('7900EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(7900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('7900GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(7900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('7900USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(7900))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Minimalist_Cedar_Nightstand-1.3.jpeg'
        )
        .dimensions({ w: 4011, h: 6016 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Minimalist_Cedar_Nightstand-1.1.jpeg'
        )
        .dimensions({ w: 4011, h: 6016 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Minimalist_Cedar_Nightstand-1.2.jpeg'
        )
        .dimensions({ w: 4011, h: 6016 }),
    ])
    .attributes([
      AttributeDraft.random().name('search-finish').value('gray'),
      AttributeDraft.random().name('finish-label').value({
        'en-GB': 'Gainsboro',
        'de-DE': 'Gainsboro',
        'en-US': 'Gainsboro',
      }),
      AttributeDraft.random().name('finish-code').value('#dcdcdc'),
    ]);

export default minimalistCedarNightstand01;
