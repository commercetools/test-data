import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const stoneServingTray01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('SST-02')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(2499))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(2499))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(2499))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Stone_Serving_Tray-1.1.jpeg'
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
        .name('finishlabel')
        .value({ 'en-GB': 'Stone', 'de-DE': 'Stein', 'en-US': 'Stone' }),
      AttributeDraft.random()
        .name('finish')
        .value({ 'en-GB': '#6B6B6B', 'en-US': '#6B6B6B', 'de-DE': '#6B6B6B' }),
    ]);

export default stoneServingTray01;
