import { TBuilder } from '../../../../../../core';
import { MoneyDraft, PriceDraft } from '../../../../../commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const doubleSidedShotGlass01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('doubleSidedShotGlass01')
    .sku('SHOT-095')
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
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Double_Sided_Shot_Glass-1.1.jpeg'
        )
        .dimensions({ w: 3648, h: 5472 }),
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

export default doubleSidedShotGlass01;
