import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const willowTeapot01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('willowTeapot01')
    .sku('WTP-09')
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
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Willow_Teapot-1.1.jpeg'
        )
        .dimensions({ w: 6240, h: 4160 }),
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
            'en-US': 'Blue',
            'en-GB': 'Blue',
            'de-DE': 'Blau',
          },
        ]),
      AttributeDraft.random().name('color-label').value({
        'en-GB': 'Sky Blue',
        'de-DE': 'Himmel blau',
        'en-US': 'Sky Blue',
      }),
      AttributeDraft.random().name('color-code').value({
        'en-US': '#87CEEB',
        'en-GB': '#87CEEB',
        'de-DE': '#87CEEB',
      }),
    ]);

export default willowTeapot01;
