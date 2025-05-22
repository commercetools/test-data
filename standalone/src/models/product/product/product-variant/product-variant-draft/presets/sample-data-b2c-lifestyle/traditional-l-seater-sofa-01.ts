import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const traditionalLSeaterSofa01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('traditionalLSeaterSofa01')
    .sku('TLSS-01')
    .prices([
      PriceDraft.presets
        .empty()
        .key('359900EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(359900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('359900GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(359900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('359900USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(359900))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Traditional_L_Seater_Sofa-1.2.jpeg'
        )
        .dimensions({ w: 2500, h: 2500 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Traditional_L_Seater_Sofa-1.1.jpeg'
        )
        .dimensions({ w: 2500, h: 2500 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Traditional_L_Seater_Sofa-1.3.jpeg'
        )
        .dimensions({ w: 5760, h: 3840 }),
    ])
    .attributes([
      AttributeDraft.random().name('color').value({
        'en-US': 'Beige:#F5F5DC',
        'en-GB': 'Beige:#F5F5DC',
        'de-DE': 'Beige:#F5F5DC',
      }),
      AttributeDraft.random().name('finish').value({
        'en-US': 'Saddle Brown:#8b4513',
        'en-GB': 'Saddle Brown:#8b4513',
        'de-DE': 'Sattel braun:#8b4513',
      }),

      AttributeDraft.random().name('productspec').value({
        'en-US':
          '- Cotton upholstery\n- Comes with accent pillows\n- Assembly on site',
        'en-GB':
          '- Cotton upholstery\n- Comes with accent pillows\n- Assembly on site',
        'de-DE':
          '- Baumwollbezug\n- Wurfkissen um Lieferumfang enthalten\n- Selbstmontage',
      }),
    ]);

export default traditionalLSeaterSofa01;
