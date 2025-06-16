import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const squareBambooCoaster01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('squareBambooCoaster01')
    .sku('BAMB-084')
    .prices([
      PriceDraft.presets
        .empty()
        .key('1099EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(1099))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('1099GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(1099))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('1099USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(1099))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Square_Bamboo_Coaster-1.1.jpeg'
        )
        .dimensions({ w: 2912, h: 2912 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Wipe clean with wet cloth\n- Set includes 4 coaster',
        'en-US': '- Wipe clean with wet cloth\n- Set includes 4 coaster',
        'de-DE':
          '- Mit einem feuchten Tuch abwischen\n- Das Set enthält 4 Untersetzer',
      }),
      AttributeDraft.random()
        .name('search-color')
        .value([
          {
            'en-US': 'Yellow',
            'en-GB': 'Yellow',
            'de-DE': 'Gelb',
          },
        ]),
      AttributeDraft.random().name('color-label').value({
        'en-GB': 'Wheat',
        'de-DE': 'Weizen',
        'en-US': 'Wheat',
      }),
      AttributeDraft.random().name('color-code').value('#f5deb3'),
    ]);

export default squareBambooCoaster01;
