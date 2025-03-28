import { MoneyDraft, PriceDraft } from '@commercetools-test-data/commons';
import { TBuilder } from '@commercetools-test-data/core';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import * as ProductVariantDraft from '../../index';

const cocktailShakerSet01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('cocktailShakerSet01')
    .sku('COC-0843')
    .prices([
      PriceDraft.presets
        .empty()
        .key('1599EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(1599))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('1599GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(1599))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('1599USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(1599))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cocktail_Shaker_Set-1.1.jpeg'
        )
        .dimensions({ w: 4929, h: 5334 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Stainless steel\n- Hand wash only',
        'de-DE': '- Edelstahl\n- Handwäsche nur',
        'en-US': '- Stainless steel\n- Hand wash only',
      }),
      AttributeDraft.random().name('finish').value({
        'en-GB': 'Gold:#FFD700',
        'de-DE': 'Gold:#FFD700',
        'en-US': 'Gold:#FFD700',
      }),
    ]);

export default cocktailShakerSet01;
