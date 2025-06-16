import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const cocoaPillowCover01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('cocoaPillowCover01')
    .sku('BLPC-09')
    .prices([
      PriceDraft.presets
        .empty()
        .key('1099EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(1099))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('1099GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(1099))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('1099USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(1099))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cocoa_Pillow_Cover-1.1.jpeg'
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

export default cocoaPillowCover01;
