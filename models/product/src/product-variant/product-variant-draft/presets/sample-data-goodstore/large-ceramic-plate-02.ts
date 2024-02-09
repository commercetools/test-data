import { MoneyDraft, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const largeCeramicPlate02 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('LCP-02')
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
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Large_Ceramic_Plate-2.1.jpeg'
        )
        .dimensions({ w: 3000, h: 2700 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Large_Ceramic_Plate-2.2.jpeg'
        )
        .dimensions({ w: 3000, h: 2700 }),
    ])
    .attributes([
      AttributeDraft.random()
        .name('color')
        .value({ 'en-US': '#ebebeb', 'en-GB': '#ebebeb', 'de-DE': '#ebebeb' }),
      AttributeDraft.random().name('colorlabel').value({
        'en-US': 'Light Gray',
        'en-GB': 'Light Gray',
        'de-DE': 'Light Gray',
      }),
      AttributeDraft.random().name('productspec').value({
        'en-US': '- Ceramic\n- Sold as 1 piece\n- Dishwasher safe',
        'en-GB':
          '- Ceramic\n- Sold as 1 piece\n- Dishwasher safe\n- Microwave safe',
        'de-DE': '- Ceramic\n- Sold as 1 piece\n- Dishwasher safe',
      }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#808080',
          label: { 'de-DE': 'Grau', 'en-GB': 'Gray', 'en-US': 'Gray' },
        }),
    ]);

export default largeCeramicPlate02;
