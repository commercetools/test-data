import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const braidedRug01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('braidedRug01')
    .sku('BR-0983')
    .prices([
      PriceDraft.presets
        .empty()
        .key('9999EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(9999))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('9999GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(9999))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('9999USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(9999))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Braided_Rug-1.1.jpeg'
        )
        .dimensions({ w: 4924, h: 4720 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Braided_Rug-1.3.jpeg'
        )
        .dimensions({ w: 5060, h: 3373 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Braided_Rug-1.2.jpeg'
        )
        .dimensions({ w: 5527, h: 3685 }),
    ])
    .attributes([
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
        'en-GB': 'Tan',
        'de-DE': 'Bräunen',
        'en-US': 'Tan',
      }),
      AttributeDraft.random().name('color-code').value('#D2B48C'),
    ]);

export default braidedRug01;
