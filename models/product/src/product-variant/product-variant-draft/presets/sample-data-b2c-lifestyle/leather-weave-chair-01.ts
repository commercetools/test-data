import { MoneyDraft, PriceDraft } from '@commercetools-test-data/commons';
import { TBuilder } from '@commercetools-test-data/core';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import * as ProductVariantDraft from '../../index';

const leatherWeaveChair01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('leatherWeaveChair01')
    .sku('BA-092')
    .prices([
      PriceDraft.presets
        .empty()
        .key('39900EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(39900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('39900GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(34900))
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
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Leather_Weave_Chair-1.1.jpeg'
        )
        .dimensions({ w: 5500, h: 4400 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Leather_Weave_Chair-1.2.jpeg'
        )
        .dimensions({ w: 3375, h: 4500 }),
    ])
    .attributes([
      AttributeDraft.random().name('new-arrival').value(true),
      AttributeDraft.random().name('color').value({
        'en-GB': 'Saddle Brown:#8b4513',
        'de-DE': 'Sattel braun:#8b4513',
        'en-US': 'Saddle Brown:#8b4513',
      }),
      AttributeDraft.random().name('finish').value({
        'en-GB': 'Tan:#D2B48C',
        'de-DE': 'Bräunen:#D2B48C',
        'en-US': 'Tan:#D2B48C',
      }),
    ]);

export default leatherWeaveChair01;
