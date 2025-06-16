import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const sandTeaCup01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('sandTeaCup01')
    .sku('STM-09')
    .prices([
      PriceDraft.presets
        .empty()
        .key('299EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(299))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('299GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(299))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('299USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(299))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Sand_Tea_Cup-1.1.jpeg'
        )
        .dimensions({ w: 6046, h: 4020 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Includes 1 mug',
        'en-US': '- Includes 1 mug',
        'de-DE': '- Enthält 1 Tasse',
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
      AttributeDraft.random().name('color-label').value({
        'en-GB': 'Sand',
        'de-DE': 'Sand',
        'en-US': 'Sand',
      }),
      AttributeDraft.random().name('color-code').value('#C2B280'),
    ]);

export default sandTeaCup01;
