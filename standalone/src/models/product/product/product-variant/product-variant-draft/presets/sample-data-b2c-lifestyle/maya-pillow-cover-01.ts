import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const mayaPillowCover01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('mayaPillowCover01')
    .sku('MPC-02')
    .prices([
      PriceDraft.presets
        .empty()
        .key('899EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(899))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('899GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(899))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('899USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(899))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Maya_Pillow_Cover-1.1.jpeg'
        )
        .dimensions({ w: 6240, h: 4160 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Machine washable\n- Does not include pillow',
        'de-DE':
          '- Waschmaschinenfest\n- Kissen nicht im Lieferumfang enthalten',
        'en-US': '- Machine washable\n- Does not include pillow',
      }),
      AttributeDraft.random()
        .name('search-color')
        .value([
          {
            'en-US': 'Purple',
            'en-GB': 'Purple',
            'de-DE': 'Violett',
          },
        ]),
      AttributeDraft.random().name('color-label').value({
        'en-GB': 'Plum',
        'de-DE': 'Pflaume',
        'en-US': 'Plum',
      }),
      AttributeDraft.random().name('color-code').value('#DDA0DD'),
    ]);

export default mayaPillowCover01;
