import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const turnerVelvetArmchair01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('turnerVelvetArmchair01')
    .sku('TARM-03')
    .prices([
      PriceDraft.presets
        .empty()
        .key('39900EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(39900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('39900GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(39900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('39900USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(39900))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Turner_Velvet_Armchair-1.1.jpeg'
        )
        .dimensions({ w: 2500, h: 2500 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Turner_Velvet_Armchair-1.2.jpeg'
        )
        .dimensions({ w: 2500, h: 2500 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Dry clean only',
        'en-US': '- Dry clean only',
        'de-DE': '- Nur chemische Reinigung',
      }),
      AttributeDraft.random()
        .name('search-color')
        .value([
          {
            'en-US': 'Blue',
            'en-GB': 'Blue',
            'de-DE': 'Blau',
          },
        ]),
      AttributeDraft.random().name('color-label').value({
        'en-GB': 'Royal Blue',
        'de-DE': 'Königs blau',
        'en-US': 'Royal Blue',
      }),
      AttributeDraft.random().name('color-code').value('#4169E1'),
    ]);

export default turnerVelvetArmchair01;
