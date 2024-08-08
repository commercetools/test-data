import { MoneyDraft, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const largeCeramicPlate01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('LCP-01')
    .prices([
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(399))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(399))
        .country('GB'),
      PriceDraft.presets
        .empty()
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
      AttributeDraft.random().name('color').value({
        'en-US': 'Light Olive:#BAB86C',
        'en-GB': 'Light Olive:#BAB86C',
        'de-DE': 'Helles Oliv:#BAB86C',
      }),
      AttributeDraft.random().name('productspec').value({
        'en-US': '- Ceramic\n- Sold as 1 piece\n- Dishwasher safe',
        'en-GB':
          '- Ceramic\n- Sold as 1 piece\n- Dishwasher safe\n- Microwave safe',
        'de-DE': '- Ceramic\n- Sold as 1 piece\n- Dishwasher safe',
      }),
    ]);

export default largeCeramicPlate01;
