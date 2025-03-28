import { MoneyDraft, PriceDraft } from '@commercetools-test-data/commons';
import { TBuilder } from '@commercetools-test-data/core';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import * as ProductVariantDraft from '../../index';

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
      AttributeDraft.random().name('color').value({
        'en-GB': 'White:#FFFFFF',
        'de-DE': 'Weiß:#FFFFFF',
        'en-US': 'White:#FFFFFF',
      }),
      AttributeDraft.random().name('finish').value({
        'en-US': 'Silver:#C0C0C0',
        'en-GB': 'Silver:#C0C0C0',
        'de-DE': 'Silber:#C0C0C0',
      }),
    ]);

export default travelCoffeeMug01;
