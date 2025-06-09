import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const charlieArmchair01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('charlieArmchair01')
    .sku('CARM-023')
    .prices([
      PriceDraft.presets
        .empty()
        .key('49900EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(49900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('49900GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(49900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('49900USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(49900))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Charlie_Armchair-1.1.jpeg'
        )
        .dimensions({ w: 5500, h: 4400 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Dry clean only',
        'de-DE': '- Nur chemische Reinigung',
        'en-US': '- Dry clean only',
      }),
      AttributeDraft.random()
        .name('search-color')
        .value([
          {
            'en-US': 'Brown',
            'en-GB': 'Brown',
            'de-DE': 'Braun',
          },
        ]),
      AttributeDraft.random()
        .name('search-finish')
        .value([
          {
            'en-US': 'Yellow',
            'en-GB': 'Yellow',
            'de-DE': 'Gelb',
          },
        ]),
      AttributeDraft.random().name('color-label').value({
        'en-GB': 'Peru',
        'de-DE': 'Peru',
        'en-US': 'Peru',
      }),
      AttributeDraft.random().name('finish-label').value({
        'en-GB': 'Tan',
        'de-DE': 'Bräunen',
        'en-US': 'Tan',
      }),
      AttributeDraft.random().name('color-code').value({
        'en-US': '#CD853F',
        'en-GB': '#CD853F',
        'de-DE': '#CD853F',
      }),
      AttributeDraft.random().name('finish-code').value({
        'en-US': '#D2B48C',
        'en-GB': '#D2B48C',
        'de-DE': '#D2B48C',
      }),
    ]);

export default charlieArmchair01;
