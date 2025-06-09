import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const ivoryPlate01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('ivoryPlate01')
    .sku('ISP-01')
    .prices([
      PriceDraft.presets
        .empty()
        .key('1699EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(1699))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('1699GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(1699))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('1699USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(1699))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Ivory_Plate-1.1.jpeg'
        )
        .dimensions({ w: 5088, h: 4576 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Includes 1 plate',
        'de-DE': '- Enthält 1 Teller',
        'en-US': '- Includes 1 plate',
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
        'en-GB': 'Ivory',
        'de-DE': 'Elfenbein',
        'en-US': 'Ivory',
      }),
      AttributeDraft.random().name('color-code').value({
        'en-US': '#FFFFF0',
        'en-GB': '#FFFFF0',
        'de-DE': '#FFFFF0',
      }),
    ]);

export default ivoryPlate01;
