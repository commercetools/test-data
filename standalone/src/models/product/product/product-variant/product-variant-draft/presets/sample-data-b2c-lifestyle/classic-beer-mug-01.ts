import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const classicBeerMug01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('classicBeerMug01')
    .sku('CBM-03')
    .prices([
      PriceDraft.presets
        .empty()
        .key('3599EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(3599))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('3599GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(3599))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('3599USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(3599))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Classic_Beer_Mug-1.1.jpeg'
        )
        .dimensions({ w: 3606, h: 5409 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Set includes 6 mugs',
        'de-DE': '- Das Set enthält 6 Tassen',
        'en-US': '- Set includes 6 mugs',
      }),
      AttributeDraft.random().name('color').value({
        'en-GB': 'Transparent:transparent',
        'de-DE': 'Transparent:transparent',
        'en-US': 'Transparent:transparent',
      }),
      AttributeDraft.random().name('finish').value({
        'en-GB': 'Glass:transparent',
        'de-DE': 'Glas:transparent',
        'en-US': 'Glass:transparent',
      }),
    ]);

export default classicBeerMug01;
