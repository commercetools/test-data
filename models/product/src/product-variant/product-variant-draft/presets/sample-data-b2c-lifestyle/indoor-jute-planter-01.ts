import { MoneyDraft, PriceDraft } from '@commercetools-test-data/commons';
import { TBuilder } from '@commercetools-test-data/core';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import * as ProductVariantDraft from '../../index';

const indoorJutePlanter01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('indoorJutePlanter01')
    .sku('IJP-03')
    .prices([
      PriceDraft.presets
        .empty()
        .key('3299EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(3299))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('3299GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(3299))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('3299USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(3299))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Indoor_Jute_Planter-1.1.jpeg'
        )
        .dimensions({ w: 5000, h: 5000 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Plant not included',
        'en-US': '- Plant not included',
        'de-DE': '- Pflanze nicht im Lieferumfang enthalten',
      }),
      AttributeDraft.random().name('size').value({ 'en-GB': 'Large' }),
    ]);

export default indoorJutePlanter01;
