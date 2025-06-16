import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const brunoChair01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('brunoChair01')
    .sku('BARM-03')
    .prices([
      PriceDraft.presets
        .empty()
        .key('7999EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(7999))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('7999GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(7999))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('7999USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(7999))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Bruno_Chair-1.1.jpeg'
        )
        .dimensions({ w: 6473, h: 4315 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Includes 1 chair',
        'de-DE': '- Beinhaltet 1 Stuhl',
        'en-US': '- Includes 1 chair',
      }),
      AttributeDraft.random().name('search-color').value('blue'),
      AttributeDraft.random().name('search-finish').value('brown'),
      AttributeDraft.random().name('color-label').value({
        'en-GB': 'Royal Blue',
        'de-DE': 'Königs blau',
        'en-US': 'Royal Blue',
      }),
      AttributeDraft.random().name('finish-label').value({
        'en-GB': 'Saddle Brown',
        'de-DE': 'Sattel braun',
        'en-US': 'Saddle Brown',
      }),
      AttributeDraft.random().name('color-code').value('#4169E1'),
      AttributeDraft.random().name('finish-code').value('#8b4513'),
    ]);

export default brunoChair01;
