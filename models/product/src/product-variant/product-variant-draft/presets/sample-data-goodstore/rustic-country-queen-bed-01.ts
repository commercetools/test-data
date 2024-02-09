import { MoneyDraft, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const rusticCountryQueenBed01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('RCQB-01')
    .prices([
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(329900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(329900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('USD').centAmount(329900))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Rustic_Country_Queen_Bed-1.1.jpeg'
        )
        .dimensions({ w: 5000, h: 5000 }),
    ])
    .attributes([
      AttributeDraft.random()
        .name('color')
        .value({ 'en-US': 'tan', 'en-GB': 'tan', 'de-DE': 'tan' }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({ 'en-US': 'Tan', 'en-GB': 'Tan', 'de-DE': 'Bräunen' }),
      AttributeDraft.random().name('finishlabel').value({
        'en-US': 'Briarsmoke',
        'en-GB': 'Briarsmoke',
        'de-DE': 'Briarsmoke',
      }),
      AttributeDraft.random().name('finish').value({
        'en-US': 'rosybrown',
        'en-GB': 'rosybrown',
        'de-DE': 'rosybrown',
      }),
      AttributeDraft.random().name('productspec').value({
        'en-US':
          '- Leather upholstery\n- Standard Queen size\n- Assembly on site',
        'en-GB':
          '- Leather upholstery\n- Standard Queen size\n- Assembly on site',
        'de-DE':
          '- Leather upholstery\n- Standard Queen size\n- Assembly on site',
      }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#D2B48C',
          label: { 'de-DE': 'Bräunen', 'en-GB': 'Tan', 'en-US': 'Tan' },
        }),
    ]);

export default rusticCountryQueenBed01;
