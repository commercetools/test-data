import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const sunnaiGlassBowl02 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('sunnaiGlassBowl02')
    .sku('SGB-02')
    .prices([
      PriceDraft.presets
        .empty()
        .key('899EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(899))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('899GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(899))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('899USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(899))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Sunnai_Glass_Bowl-2.1.jpeg'
        )
        .dimensions({ w: 4944, h: 3288 }),
    ])
    .attributes([
      AttributeDraft.random()
        .name('type')
        .value([{ 'en-GB': 'Deep' }]),
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
      AttributeDraft.random().name('color-code').value('transparent'),
      AttributeDraft.random().name('finish-code').value('transparent'),
    ]);

export default sunnaiGlassBowl02;
