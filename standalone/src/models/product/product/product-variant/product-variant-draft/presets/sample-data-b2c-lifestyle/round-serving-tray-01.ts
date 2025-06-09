import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const roundServingTray01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('roundServingTray01')
    .sku('RST-01')
    .prices([
      PriceDraft.presets
        .empty()
        .key('499EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(499))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('499GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(499))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('499USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(499))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Round_Serving_Tray-1.1.jpeg'
        )
        .dimensions({ w: 3537, h: 3537 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Round_Serving_Tray-1.2.jpeg'
        )
        .dimensions({ w: 3283, h: 1719 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Hand wash only',
        'en-US': '- Hand wash only',
        'de-DE': '- Handwäsche nur',
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
      AttributeDraft.random().name('color-label').value({
        'en-GB': 'Brown',
        'de-DE': 'Braun',
        'en-US': 'Brown',
      }),
      AttributeDraft.random().name('color-code').value({
        'en-US': '#a52a2a',
        'en-GB': '#a52a2a',
        'de-DE': '#a52a2a',
      }),
    ]);

export default roundServingTray01;
