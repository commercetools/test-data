import { MoneyDraft, PriceDraft } from '@commercetools-test-data/commons';
import { TBuilder } from '@commercetools-test-data/core';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import * as ProductVariantDraft from '../../index';

const smallWoodenBowl01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('smallWoodenBowl01')
    .sku('SWB-01')
    .prices([
      PriceDraft.presets
        .empty()
        .key('399EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(399))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('399GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(399))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('399USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(399))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Small_Wooden_Bowl-1.1.jpeg'
        )
        .dimensions({ w: 3241, h: 2500 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Small_Wooden_Bowl-1.3.jpeg'
        )
        .dimensions({ w: 5184, h: 3456 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Small_Wooden_Bowl-1.4.jpeg'
        )
        .dimensions({ w: 6144, h: 4096 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Small_Wooden_Bowl-1.2.jpeg'
        )
        .dimensions({ w: 7696, h: 5133 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Includes 1 bowl',
        'en-US': '- Includes 1 bowl',
        'de-DE': '- Enthält 1 Schüssel',
      }),
      AttributeDraft.random().name('color').value({
        'en-GB': 'Saddle Brown:#8b4513',
        'de-DE': 'Sattel braun:#8b4513',
        'en-US': 'Saddle Brown:#8b4513',
      }),
    ]);

export default smallWoodenBowl01;
