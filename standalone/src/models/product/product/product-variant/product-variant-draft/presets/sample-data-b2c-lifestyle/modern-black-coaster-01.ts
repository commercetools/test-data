import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const modernBlackCoaster01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('modernBlackCoaster01')
    .sku('BCOAS-08')
    .prices([
      PriceDraft.presets
        .empty()
        .key('1999EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(1999))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('1999GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(1999))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('1999USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(1999))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Black_Coaster-1.1.jpeg'
        )
        .dimensions({ w: 2912, h: 2912 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Black_Coaster-1.2.jpeg'
        )
        .dimensions({ w: 2912, h: 2912 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Set includes 4 coasters',
        'de-DE': '- Das Set enthält 4 Untersetzer',
        'en-US': '- Set includes 4 coasters',
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

export default modernBlackCoaster01;
