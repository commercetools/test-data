import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const evergreenCandle01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('evergreenCandle01')
    .sku('EC-0993')
    .prices([
      PriceDraft.presets
        .empty()
        .key('299EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(299))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('299GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(299))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('299USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(299))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Evergreen_Candle-1.1.jpeg'
        )
        .dimensions({ w: 3840, h: 2160 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Evergreen_Candle-1.3.jpeg'
        )
        .dimensions({ w: 3840, h: 2160 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Evergreen_Candle-1.2.jpeg'
        )
        .dimensions({ w: 4480, h: 6720 }),
    ])
    .attributes([
      AttributeDraft.random().name('color').value({
        'en-GB': 'Light Olive:#BAB86C',
        'de-DE': 'Helles Oliv:#BAB86C',
        'en-US': 'Light Olive:#BAB86C',
      }),
    ]);

export default evergreenCandle01;
