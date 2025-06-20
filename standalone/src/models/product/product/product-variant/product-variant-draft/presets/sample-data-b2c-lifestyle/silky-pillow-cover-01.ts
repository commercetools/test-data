import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const silkyPillowCover01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('silkyPillowCover01')
    .sku('SPC-06')
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
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Silky_Pillow_Cover-1.1.jpeg'
        )
        .dimensions({ w: 6016, h: 4011 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Pillow not included',
        'en-US': '- Pillow not included',
        'de-DE': '- Kissen nicht im Lieferumfang enthalten',
      }),
      AttributeDraft.random().name('search-color').value('silver'),
      AttributeDraft.random().name('color-label').value({
        'en-GB': 'Silver',
        'de-DE': 'Silber',
        'en-US': 'Silver',
      }),
      AttributeDraft.random().name('color-code').value('#C0C0C0'),
    ]);

export default silkyPillowCover01;
