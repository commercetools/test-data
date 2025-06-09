import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const sunnaiGlassBowl01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('sunnaiGlassBowl01')
    .sku('SGB-01')
    .prices([
      PriceDraft.presets
        .empty()
        .key('799EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(799))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('799GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(799))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('799USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(799))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Sunnai_Glass_Bowl-1.1.jpeg'
        )
        .dimensions({ w: 5381, h: 3739 }),
    ])
    .attributes([
      AttributeDraft.random()
        .name('type')
        .value([{ 'en-GB': 'Round' }]),
      AttributeDraft.random()
        .name('search-color')
        .value([
          {
            'en-US': 'Transparent',
            'en-GB': 'Transparent',
            'de-DE': 'Transparent',
          },
        ]),
      AttributeDraft.random()
        .name('search-finish')
        .value([
          {
            'en-US': 'Glass',
            'en-GB': 'Glass',
            'de-DE': 'Glas',
          },
        ]),
      AttributeDraft.random().name('color-label').value({
        'en-GB': 'Transparent',
        'de-DE': 'Transparent',
        'en-US': 'Transparent',
      }),
      AttributeDraft.random().name('finish-label').value({
        'en-GB': 'Glass',
        'de-DE': 'Glas',
        'en-US': 'Glass',
      }),
      AttributeDraft.random().name('color-code').value({
        'en-US': 'transparent',
        'en-GB': 'transparent',
        'de-DE': 'transparent',
      }),
      AttributeDraft.random().name('finish-code').value({
        'en-US': 'transparent',
        'en-GB': 'transparent',
        'de-DE': 'transparent',
      }),
    ]);

export default sunnaiGlassBowl01;
