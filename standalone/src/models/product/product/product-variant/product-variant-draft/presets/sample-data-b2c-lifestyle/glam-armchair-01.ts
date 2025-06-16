import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const glamArmchair01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('glamArmchair01')
    .sku('GARM-093')
    .prices([
      PriceDraft.presets
        .empty()
        .key('59900EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(59900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('59900GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(59900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('59900USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(59900))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Glam_Armchair-1.1.jpeg'
        )
        .dimensions({ w: 5500, h: 4400 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Dry clean only\n- Pillow included',
        'de-DE': '- Nur chemische Reinigung\n- Kissen inklusive',
        'en-US': '- Dry clean only\n- Pillow included',
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
            'en-US': 'Gold',
            'en-GB': 'Gold',
            'de-DE': 'Gold',
          },
        ]),
      AttributeDraft.random().name('color-label').value({
        'en-GB': 'Golden Rod',
        'de-DE': 'Goldene Rute',
        'en-US': 'Golden Rod',
      }),
      AttributeDraft.random().name('finish-label').value({
        'en-GB': 'Gold',
        'de-DE': 'Gold',
        'en-US': 'Gold',
      }),
      AttributeDraft.random().name('color-code').value('#DAA520'),
      AttributeDraft.random().name('finish-code').value('#FFD700'),
    ]);

export default glamArmchair01;
