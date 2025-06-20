import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const traditionalThreeSeaterSofa01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('traditionalThreeSeaterSofa01')
    .sku('TTSS-01')
    .prices([
      PriceDraft.presets
        .empty()
        .key('239900EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(239900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('239900GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(239900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('239900USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(239900))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Traditional_Three_Seater_Sofa-1.3.jpeg'
        )
        .dimensions({ w: 2500, h: 2500 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Traditional_Three_Seater_Sofa-1.1.jpeg'
        )
        .dimensions({ w: 2500, h: 2500 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Traditional_Three_Seater_Sofa-1.2.jpeg'
        )
        .dimensions({ w: 5760, h: 3840 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-US': '- Three seater sofa\n- Velvet upholstery\n- Assembly on site',
        'en-GB': '- Three seater sofa\n- Velvet upholstery\n- Assembly on site',
        'de-DE': '- Dreisitzer\n- Samtbezug\n- Selbstmontage',
      }),
      AttributeDraft.random().name('search-color').value('green'),
      AttributeDraft.random().name('search-finish').value('brown'),
      AttributeDraft.random().name('color-label').value({
        'en-GB': 'Medium Sea Green',
        'de-DE': 'Mittel meer grün',
        'en-US': 'Medium Sea Green',
      }),
      AttributeDraft.random().name('finish-label').value({
        'en-GB': 'Saddle Brown',
        'de-DE': 'Sattel braun',
        'en-US': 'Saddle Brown',
      }),
      AttributeDraft.random().name('color-code').value('#3CB371'),
      AttributeDraft.random().name('finish-code').value('#8b4513'),
    ]);

export default traditionalThreeSeaterSofa01;
