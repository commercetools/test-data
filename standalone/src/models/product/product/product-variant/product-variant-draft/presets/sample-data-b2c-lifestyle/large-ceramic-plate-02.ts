import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const largeCeramicPlate02 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('largeCeramicPlate02')
    .sku('LCP-02')
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
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Large_Ceramic_Plate-2.1.jpeg'
        )
        .dimensions({ w: 3000, h: 2700 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Large_Ceramic_Plate-2.2.jpeg'
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
            'en-US': 'Gray',
            'en-GB': 'Grey',
            'de-DE': 'Grau',
          },
        ]),
      AttributeDraft.random().name('color-label').value({
        'en-GB': 'Light Grey',
        'de-DE': 'Hell grau',
        'en-US': 'Light Gray',
      }),
      AttributeDraft.random().name('color-code').value({
        'en-US': '#D3D3D3',
        'en-GB': '#D3D3D3',
        'de-DE': '#D3D3D3',
      }),
    ]);

export default largeCeramicPlate02;
