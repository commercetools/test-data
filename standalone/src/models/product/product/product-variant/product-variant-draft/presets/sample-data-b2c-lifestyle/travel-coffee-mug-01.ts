import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const travelCoffeeMug01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('travelCoffeeMug01')
    .sku('TCM-03')
    .prices([
      PriceDraft.presets
        .empty()
        .key('499EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(499))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('499GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(499))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('499USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(499))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Travel_Coffee_Mug-1.1.jpeg'
        )
        .dimensions({ w: 4000, h: 4000 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Insulated \n- Suitable for both cold and hot drinks',
        'en-US': '- Insulated \n- Suitable for both cold and hot drinks',
        'de-DE':
          '- Isoliert\n- Sowohl für kalte als auch heiße Getränke geeignet',
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
      AttributeDraft.random()
        .name('search-finish')
        .value([
          {
            'en-US': 'Silver',
            'en-GB': 'Silver',
            'de-DE': 'Silber',
          },
        ]),
      AttributeDraft.random().name('color-label').value({
        'en-GB': 'White',
        'de-DE': 'Weiß',
        'en-US': 'White',
      }),
      AttributeDraft.random().name('finish-label').value({
        'en-GB': 'Silver',
        'de-DE': 'Silber',
        'en-US': 'Silver',
      }),
      AttributeDraft.random().name('color-code').value('#FFFFFF'),
      AttributeDraft.random().name('finish-code').value('#C0C0C0'),
    ]);

export default travelCoffeeMug01;
