import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const amaliaRug01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('amaliaRug01')
    .sku('AMR-09')
    .prices([
      PriceDraft.presets
        .empty()
        .key('13999EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(13999))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('13999GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(13999))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('13999USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(13999))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Amalia_Rug-1.1.jpeg'
        )
        .dimensions({ w: 4500, h: 3000 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- 6ft x 6ft',
        'de-DE': '- 6 Fuß x 6 Fuß',
        'en-US': '- 6ft x 6ft',
      }),
      AttributeDraft.random()
        .name('search-color')
        .value([
          {
            'en-US': 'White',
            'en-GB': 'White',
            'de-DE': 'Weiß',
          },
        ]),
      AttributeDraft.random().name('color-label').value({
        'en-GB': 'White',
        'de-DE': 'Weiß',
        'en-US': 'White',
      }),
      AttributeDraft.random().name('color-code').value({
        'en-US': '#FFFFFF',
        'en-GB': '#FFFFFF',
        'de-DE': '#FFFFFF',
      }),
    ]);

export default amaliaRug01;
