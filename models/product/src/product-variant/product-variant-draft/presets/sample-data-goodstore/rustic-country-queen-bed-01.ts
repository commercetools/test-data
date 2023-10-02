import { Money, PriceDraft } from '@commercetools-test-data/commons';
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
        .value(Money.random().currencyCode('EUR').centAmount(329900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(329900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(329900))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_321480725-j3db5-fj.jpeg'
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
