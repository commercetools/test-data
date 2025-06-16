import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const wilmaChair01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('wilmaChair01')
    .sku('NJOP-09')
    .prices([
      PriceDraft.presets
        .empty()
        .key('29900EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(29900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('29900GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(29900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('29900USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(29900))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Wilma_Chair-1.1.jpeg'
        )
        .dimensions({ w: 2400, h: 3200 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Wilma_Chair-1.2.jpeg'
        )
        .dimensions({ w: 2400, h: 3200 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Cushion covers are removable and machine washable',
        'en-US': '- Cushion covers are removable and machine washable',
        'de-DE': '- Kissenbezüge sind abnehmbar und maschinenwaschbar',
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
      AttributeDraft.random()
        .name('search-finish')
        .value([
          {
            'en-US': 'Black',
            'en-GB': 'Black',
            'de-DE': 'Schwarz',
          },
        ]),
      AttributeDraft.random().name('color-label').value({
        'en-GB': 'Floral White',
        'de-DE': 'Blumen weiß',
        'en-US': 'Floral White',
      }),
      AttributeDraft.random().name('finish-label').value({
        'en-GB': 'Black',
        'de-DE': 'Schwarz',
        'en-US': 'Black',
      }),
      AttributeDraft.random().name('color-code').value('#FFFAF0'),
      AttributeDraft.random().name('finish-code').value('#000000'),
    ]);

export default wilmaChair01;
