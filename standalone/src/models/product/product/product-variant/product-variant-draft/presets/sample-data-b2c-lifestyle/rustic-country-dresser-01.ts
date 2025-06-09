import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const rusticCountryDresser01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('rusticCountryDresser01')
    .sku('RCD-01')
    .prices([
      PriceDraft.presets
        .empty()
        .key('159900EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(159900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('159900GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(159900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('159900USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(159900))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Rustic_Country_Dresser-1.2.jpeg'
        )
        .dimensions({ w: 2500, h: 2500 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Rustic_Country_Dresser-1.3.jpeg'
        )
        .dimensions({ w: 2500, h: 2500 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Rustic_Country_Dresser-1.1.jpeg'
        )
        .dimensions({ w: 2500, h: 2500 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Rustic_Country_Dresser-1.4.jpeg'
        )
        .dimensions({ w: 5760, h: 3840 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-US':
          '- 3 small drawers and 4 large drawers\n- Nickel drawer handles\n- Assembled on site',
        'en-GB':
          '- 3 small drawers and 4 large drawers\n- Nickel drawer handles\n- Assembled on site',
        'de-DE':
          '- 3 small drawers and 4 large drawers\n- Nickel drawer handles\n- Assembled on site',
      }),
      AttributeDraft.random()
        .name('search-finish')
        .value([
          {
            'en-US': 'Gray',
            'en-GB': 'Grey',
            'de-DE': 'Grau',
          },
        ]),
      AttributeDraft.random().name('finish-label').value({
        'en-GB': 'Light Gray',
        'de-DE': 'Hell grau',
        'en-US': 'Light Gray',
      }),
      AttributeDraft.random().name('finish-code').value({
        'en-US': '#D3D3D3',
        'en-GB': '#D3D3D3',
        'de-DE': '#D3D3D3',
      }),
    ]);

export default rusticCountryDresser01;
