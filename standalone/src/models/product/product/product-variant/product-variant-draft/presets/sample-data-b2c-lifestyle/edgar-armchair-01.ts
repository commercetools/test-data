import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const edgarArmchair01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('edgarArmchair01')
    .sku('EARM-04')
    .prices([
      PriceDraft.presets
        .empty()
        .key('129900EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(129900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('129900GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(129900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('129900USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(129900))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Edgar_Armchair-1.1.jpeg'
        )
        .dimensions({ w: 5000, h: 4000 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Assembly on delivery',
        'de-DE': '- Montage bei Lieferung',
        'en-US': '- Assembly on delivery',
      }),
      AttributeDraft.random()
        .name('search-color')
        .value([
          {
            'en-US': 'Green',
            'en-GB': 'Green',
            'de-DE': 'Grün',
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
        'en-GB': 'Light Olive',
        'de-DE': 'Helles Oliv',
        'en-US': 'Light Olive',
      }),
      AttributeDraft.random().name('finish-label').value({
        'en-GB': 'Black',
        'de-DE': 'Schwarz',
        'en-US': 'Black',
      }),
      AttributeDraft.random().name('color-code').value({
        'en-US': '#BAB86C',
        'en-GB': '#BAB86C',
        'de-DE': '#BAB86C',
      }),
      AttributeDraft.random().name('finish-code').value({
        'en-US': '#000000',
        'en-GB': '#000000',
        'de-DE': '#000000',
      }),
    ]);

export default edgarArmchair01;
