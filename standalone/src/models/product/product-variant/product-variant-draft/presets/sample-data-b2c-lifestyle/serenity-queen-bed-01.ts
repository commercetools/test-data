import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const serenityQueenBed01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('serenityQueenBed01')
    .sku('IQB-09')
    .prices([
      PriceDraft.presets
        .empty()
        .key('99900EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(99900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('99900GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(99900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('99900USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(99900))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Serenity_Queen_Bed-1.1.jpeg'
        )
        .dimensions({ w: 2000, h: 2000 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Assembly included in delivery',
        'en-US': '- Assembly included in delivery',
        'de-DE': '- Montage im Lieferumfang enthalten',
      }),
      AttributeDraft.random().name('color').value({
        'de-DE': 'Beige:#F5F5DC',
        'en-GB': 'Beige:#F5F5DC',
        'en-US': 'Beige:#F5F5DC',
      }),
    ]);

export default serenityQueenBed01;
