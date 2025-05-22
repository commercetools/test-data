import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const iceBucket01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('iceBucket01')
    .sku('BUCK-023')
    .prices([
      PriceDraft.presets
        .empty()
        .key('499EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(499))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('499GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(499))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('499USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(499))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Ice_Bucket-1.1.jpeg'
        )
        .dimensions({ w: 5072, h: 4992 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Stainless steel\n- Dishwasher safe',
        'de-DE': '- Edelstahl\n- Spülmaschinenfest',
        'en-US': '- Stainless steel\n- Dishwasher safe',
      }),
      AttributeDraft.random().name('finish').value({
        'en-GB': 'Silver:#C0C0C0',
        'de-DE': 'Silber:#C0C0C0',
        'en-US': 'Silver:#C0C0C0',
      }),
    ]);

export default iceBucket01;
