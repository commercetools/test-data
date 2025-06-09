import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const charcoalChair01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('charcoalChair01')
    .sku('CCH-093')
    .prices([
      PriceDraft.presets
        .empty()
        .key('9900EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(9900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('9900GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(9900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('9900USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(9900))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Charcoal_Chair-1.2.jpeg'
        )
        .dimensions({ w: 3300, h: 5309 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Charcoal_Chair-1.1.jpeg'
        )
        .dimensions({ w: 5906, h: 5906 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Includes 1 chair',
        'de-DE': '- Beinhaltet 1 Stuhl',
        'en-US': '- Includes 1 chair',
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
      AttributeDraft.random()
        .name('search-finish')
        .value([
          {
            'en-US': 'Yellow',
            'en-GB': 'Yellow',
            'de-DE': 'Gelb',
          },
        ]),
      AttributeDraft.random().name('color-label').value({
        'en-GB': 'Dark Slate Grey',
        'de-DE': 'Dunkles Schiefer grau',
        'en-US': 'Dark Slate Gray',
      }),
      AttributeDraft.random().name('finish-label').value({
        'en-GB': 'Tan',
        'de-DE': 'Bräunen',
        'en-US': 'Tan',
      }),
      AttributeDraft.random().name('color-code').value({
        'en-US': '#2F4F4F',
        'en-GB': '#2F4F4F',
        'de-DE': '#2F4F4F',
      }),
      AttributeDraft.random().name('finish-code').value({
        'en-US': '#D2B48C',
        'en-GB': '#D2B48C',
        'de-DE': '#D2B48C',
      }),
    ]);

export default charcoalChair01;
