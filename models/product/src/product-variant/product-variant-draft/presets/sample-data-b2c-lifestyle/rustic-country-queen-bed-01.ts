import { MoneyDraft, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const rusticCountryQueenBed01 = (): TProductVariantDraftBuilder =>
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
      AttributeDraft.random().name('color').value({
        'en-US': 'Tan:#D2B48C',
        'en-GB': 'Tan:#D2B48C',
        'de-DE': 'Bräunen:#D2B48C',
      }),
      AttributeDraft.random().name('finish').value({
        'en-US': 'Saddle Brown:#8b4513',
        'en-GB': 'Saddle Brown:#8b4513',
        'de-DE': 'Sattel braun:#8b4513',
      }),
      AttributeDraft.random().name('productspec').value({
        'en-US':
          '- Leather upholstery\n- Standard Queen size\n- Assembly on site',
        'en-GB':
          '- Leather upholstery\n- Standard Queen size\n- Assembly on site',
        'de-DE':
          '- Leather upholstery\n- Standard Queen size\n- Assembly on site',
      }),
    ]);

export default rusticCountryQueenBed01;
