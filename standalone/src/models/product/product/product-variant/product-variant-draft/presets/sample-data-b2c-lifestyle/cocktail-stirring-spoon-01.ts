import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const cocktailStirringSpoon01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('cocktailStirringSpoon01')
    .sku('SPOO-094')
    .prices([
      PriceDraft.presets
        .empty()
        .key('199EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(199))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('199GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(199))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('199USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(199))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cocktail_Stirring_Spoon-1.1.jpeg'
        )
        .dimensions({ w: 5757, h: 4555 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Stainless steel\n- Dishwasher safe',
        'de-DE': '- Edelstahl\n- Spülmaschinenfest',
        'en-US': '- Stainless steel\n- Dishwasher safe',
      }),
      AttributeDraft.random().name('search-finish').value('silver'),
      AttributeDraft.random().name('finish-label').value({
        'en-GB': 'Silver',
        'de-DE': 'Silber',
        'en-US': 'Silver',
      }),
      AttributeDraft.random().name('finish-code').value('#C0C0C0'),
    ]);

export default cocktailStirringSpoon01;
