import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const emeraldVelvetChair01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('emeraldVelvetChair01')
    .sku('VARM-09')
    .prices([
      PriceDraft.presets
        .empty()
        .key('39900EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(39900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('39900GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(39900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('39900USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(39900))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Emerald_Velvet_Chair-1.1.jpeg'
        )
        .dimensions({ w: 6000, h: 4800 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Dry clean only',
        'de-DE': '- Nur chemische Reinigung',
        'en-US': '- Dry clean only',
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
            'en-US': 'Brown',
            'en-GB': 'Brown',
            'de-DE': 'Braun',
          },
        ]),
      AttributeDraft.random().name('color-label').value({
        'en-GB': 'Green',
        'de-DE': 'Grün',
        'en-US': 'Green',
      }),
      AttributeDraft.random().name('finish-label').value({
        'en-GB': 'Burlywood',
        'de-DE': 'Burlywood',
        'en-US': 'Burlywood',
      }),
      AttributeDraft.random().name('color-code').value({
        'en-US': '#008000',
        'en-GB': '#008000',
        'de-DE': '#008000',
      }),
      AttributeDraft.random().name('finish-code').value({
        'en-US': '#deb887',
        'en-GB': '#deb887',
        'de-DE': '#deb887',
      }),
    ]);

export default emeraldVelvetChair01;
