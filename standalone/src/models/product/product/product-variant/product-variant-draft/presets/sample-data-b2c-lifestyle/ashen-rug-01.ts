import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const ashenRug01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('ashenRug01')
    .sku('ARG-56')
    .prices([
      PriceDraft.presets
        .empty()
        .key('19999EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(19999))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('19999GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(19999))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('19999USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(25000))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Ashen_Rug-1.1.jpeg'
        )
        .dimensions({ w: 4500, h: 3000 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Ashen_Rug-1.2.jpeg'
        )
        .dimensions({ w: 4500, h: 3000 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- 5ft x 7ft\n- Dry-clean only',
        'de-DE': '- 5 Fuß x 7 Fuß\n- Nur chemische Reinigung',
        'en-US': '- 5ft x 7ft\n- Dry-clean only',
      }),
      AttributeDraft.random().name('search-color').value('gray'),
      AttributeDraft.random().name('color-label').value({
        'en-GB': 'Gainsboro',
        'de-DE': 'Gainsboro',
        'en-US': 'Gainsboro',
      }),
      AttributeDraft.random().name('color-code').value('#dcdcdc'),
    ]);

export default ashenRug01;
