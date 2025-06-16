import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const rusticCountryQueenBed01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('rusticCountryQueenBed01')
    .sku('RCQB-01')
    .prices([
      PriceDraft.presets
        .empty()
        .key('329900EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(329900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('329900GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(329900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('329900USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(329900))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Rustic_Country_Queen_Bed-1.1.jpeg'
        )
        .dimensions({ w: 5000, h: 5000 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-US':
          '- Leather upholstery\n- Standard Queen size\n- Assembly on site',
        'en-GB':
          '- Leather upholstery\n- Standard Queen size\n- Assembly on site',
        'de-DE':
          '- Leather upholstery\n- Standard Queen size\n- Assembly on site',
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
        'en-GB': 'Tan',
        'de-DE': 'Bräunen',
        'en-US': 'Tan',
      }),
      AttributeDraft.random().name('finish-label').value({
        'en-GB': 'Saddle Brown',
        'de-DE': 'Sattel braun',
        'en-US': 'Saddle Brown',
      }),
      AttributeDraft.random().name('color-code').value('#D2B48C'),
      AttributeDraft.random().name('finish-code').value('#8b4513'),
    ]);

export default rusticCountryQueenBed01;
