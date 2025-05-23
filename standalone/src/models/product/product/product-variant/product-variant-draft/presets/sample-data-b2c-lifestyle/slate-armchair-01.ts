import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const slateArmchair01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('slateArmchair01')
    .sku('SARM-09')
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
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Slate_Armchair-1.1.jpeg'
        )
        .dimensions({ w: 5009, h: 4004 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Slate_Armchair-1.2.jpeg'
        )
        .dimensions({ w: 5544, h: 3498 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Includes ottoman',
        'en-US': '- Includes ottoman',
        'de-DE': '- Inklusive Ottomane',
      }),
      AttributeDraft.random().name('color').value({
        'en-GB': 'Dark Slate Grey:#2F4F4F',
        'de-DE': 'Schiefer grau:#708090',
        'en-US': 'Slate Gray:#708090',
      }),
    ]);

export default slateArmchair01;
