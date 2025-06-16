import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const leatherCoaster01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('leatherCoaster01')
    .sku('LCO-034')
    .prices([
      PriceDraft.presets
        .empty()
        .key('2499EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(2499))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('2499GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(2499))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('2499USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(2499))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Leather_Coaster-1.1.jpeg'
        )
        .dimensions({ w: 2864, h: 2864 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Includes 4 coasters',
        'de-DE': '- Enthält 4 Untersetzer',
        'en-US': '- Includes 4 coasters',
      }),
      AttributeDraft.random()
        .name('search-color')
        .value([
          {
            'en-US': 'Black',
            'en-GB': 'Black',
            'de-DE': 'Schwarz',
          },
        ]),
      AttributeDraft.random().name('color-label').value({
        'en-GB': 'Black',
        'de-DE': 'Schwarz',
        'en-US': 'Black',
      }),
      AttributeDraft.random().name('color-code').value('#000000'),
    ]);

export default leatherCoaster01;
