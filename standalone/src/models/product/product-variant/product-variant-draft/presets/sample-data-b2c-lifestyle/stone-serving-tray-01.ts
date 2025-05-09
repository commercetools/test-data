import { TBuilder } from '../../../../../../core';
import { MoneyDraft, PriceDraft } from '../../../../../commons';
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
      AttributeDraft.random().name('color').value({
        'en-GB': 'Dark Slate Grey:#2F4F4F',
        'en-US': 'Slate Gray:#708090',
        'de-DE': 'Schiefer grau:#708090',
      }),
    ]);

export default stoneServingTray01;
