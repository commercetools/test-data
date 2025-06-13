import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const patternedPillowCover01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('patternedPillowCover01')
    .sku('ADPC-09')
    .prices([
      PriceDraft.presets
        .empty()
        .key('1499EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(1499))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('1499GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(1499))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('1499USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(1499))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Patterned_Pillow_Cover-1.1.jpeg'
        )
        .dimensions({ w: 6240, h: 4160 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Machine washable\n- Pillow not included',
        'de-DE':
          '- Waschmaschinenfest\n- Kissen nicht im Lieferumfang enthalten',
        'en-US': '- Machine washable\n- Pillow not included',
      }),
      AttributeDraft.random()
        .name('search-color')
        .value([
          {
            'en-US': 'Pink',
            'en-GB': 'Pink',
            'de-DE': 'Rosa',
          },
        ]),
      AttributeDraft.random().name('color-label').value({
        'en-GB': 'Lavender Blush',
        'de-DE': 'Lavendel',
        'en-US': 'Lavender Blush',
      }),
      AttributeDraft.random().name('color-code').value({
        'en-US': '#fff0f5',
        'en-GB': '#fff0f5',
        'de-DE': '#fff0f5',
      }),
    ]);

export default patternedPillowCover01;
