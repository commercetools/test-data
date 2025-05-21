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
      AttributeDraft.random().name('color').value({
        'en-GB': 'Golden Rod:#DAA520',
        'de-DE': 'Goldene Rute:#DAA520',
        'en-US': 'Golden Rod:#DAA520',
      }),
      AttributeDraft.random().name('finish').value({
        'en-GB': 'Gold:#FFD700',
        'de-DE': 'Gold:#FFD700',
        'en-US': 'Gold:#FFD700',
      }),
    ]);

export default glamArmchair01;
