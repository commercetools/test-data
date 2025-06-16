import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const rumiChair01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('rumiChair01')
    .sku('RAM-094')
    .prices([
      PriceDraft.presets
        .empty()
        .key('12999EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(12999))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('12999GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(12999))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('15000USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(15000))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Rumi_Chair-1.1.jpeg'
        )
        .dimensions({ w: 2400, h: 3200 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Dry clean only',
        'en-US': '- Dry clean only',
        'de-DE': '- Nur chemische Reinigung',
      }),
      AttributeDraft.random().name('search-color').value('pink'),
      AttributeDraft.random().name('search-finish').value('gold'),
      AttributeDraft.random().name('color-label').value({
        'en-GB': 'Lavender Blush',
        'de-DE': 'Lavendel',
        'en-US': 'Lavender Blush',
      }),
      AttributeDraft.random().name('finish-label').value({
        'en-GB': 'Gold',
        'de-DE': 'Gold',
        'en-US': 'Gold',
      }),
      AttributeDraft.random().name('color-code').value('#fff0f5'),
      AttributeDraft.random().name('finish-code').value('#FFD700'),
    ]);

export default rumiChair01;
