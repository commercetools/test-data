import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const largeCeramicPlate01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('largeCeramicPlate01')
    .sku('LCP-01')
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
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Large_Ceramic_Plate-1.1.jpeg'
        )
        .dimensions({ w: 3000, h: 2700 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Large_Ceramic_Plate-1.2.jpeg'
        )
        .dimensions({ w: 3000, h: 2700 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-US': '- Ceramic\n- Sold as 1 piece\n- Dishwasher safe',
        'en-GB':
          '- Ceramic\n- Sold as 1 piece\n- Dishwasher safe\n- Microwave safe',
        'de-DE': '- Ceramic\n- Sold as 1 piece\n- Dishwasher safe',
      }),
      AttributeDraft.random()
        .name('search-color')
        .value([
          {
            'en-US': 'Green',
            'en-GB': 'Green',
            'de-DE': 'Grün',
          },
        ]),
      AttributeDraft.random().name('color-label').value({
        'en-GB': 'Light Olive',
        'de-DE': 'Helles Oliv',
        'en-US': 'Light Olive',
      }),
      AttributeDraft.random().name('color-code').value('#BAB86C'),
    ]);

export default largeCeramicPlate01;
