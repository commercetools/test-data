import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const meadowRug03 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('meadowRug03')
    .sku('MR-05')
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
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Meadow_Rug-3.1.jpeg'
        )
        .dimensions({ w: 4500, h: 3000 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- 3ft x 5ft',
        'de-DE': '- 3 Fuß x 5 Fuß',
        'en-US': '- 3ft x 5ft',
      }),
      AttributeDraft.random().name('color').value({
        'en-GB': 'Sky Blue:#87CEEB',
        'de-DE': 'Himmel blau:#87CEEB',
        'en-US': 'Sky Blue:#87CEEB',
      }),
    ]);

export default meadowRug03;
