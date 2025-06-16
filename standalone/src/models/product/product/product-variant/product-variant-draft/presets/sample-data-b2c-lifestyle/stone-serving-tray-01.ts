import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const stoneServingTray01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('stoneServingTray01')
    .sku('SST-02')
    .prices([
      PriceDraft.presets
        .empty()
        .key('2499EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(2499))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('2499GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(2499))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('2499USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(2499))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Stone_Serving_Tray-1.1.jpeg'
        )
        .dimensions({ w: 4125, h: 2358 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Fragile',
        'en-US': '- Fragile',
        'de-DE': '- Zerbrechlich',
      }),
      AttributeDraft.random()
        .name('search-color')
        .value([
          {
            'en-US': 'Gray',
            'en-GB': 'Grey',
            'de-DE': 'Grau',
          },
        ]),
      AttributeDraft.random().name('color-label').value({
        'en-GB': 'Dark Slate Grey',
        'de-DE': 'Schiefer grau',
        'en-US': 'Slate Gray',
      }),
      AttributeDraft.random().name('color-code').value('#2F4F4F'),
    ]);

export default stoneServingTray01;
