import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const clinkChampagneGlass01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('clinkChampagneGlass01')
    .sku('CCG-02')
    .prices([
      PriceDraft.presets
        .empty()
        .key('5499EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(5499))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('5499GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(5499))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('5499USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(5499))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Clink_Champagne_Glass-1.1.jpeg'
        )
        .dimensions({ w: 3000, h: 3000 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Set includes 6 glasses',
        'de-DE': '- Das Set enthält 6 Gläser',
        'en-US': '- Set includes 6 glasses',
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

export default clinkChampagneGlass01;
