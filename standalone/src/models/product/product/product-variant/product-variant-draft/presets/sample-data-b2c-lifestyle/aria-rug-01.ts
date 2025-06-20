import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const ariaRug01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('ariaRug01')
    .sku('AAR-34')
    .prices([
      PriceDraft.presets
        .empty()
        .key('12499EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(12499))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('12499GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(12499))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('12499USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(12499))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Aria_Rug-1.1.jpeg'
        )
        .dimensions({ w: 5200, h: 3900 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Aria_Rug-1.2.jpeg'
        )
        .dimensions({ w: 5200, h: 3900 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Aria_Rug-1.4.jpeg'
        )
        .dimensions({ w: 5200, h: 3900 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Aria_Rug-1.3.jpeg'
        )
        .dimensions({ w: 5200, h: 3900 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Dry clean only\n- 5ft x 7ft',
        'de-DE': '- Nur chemische Reinigung\n- 5 Fuß x 7 Fuß',
        'en-US': '- Dry clean only\n- 5ft x 7ft',
      }),
      AttributeDraft.random().name('search-color').value('white'),
      AttributeDraft.random().name('color-label').value({
        'en-GB': 'Ivory',
        'de-DE': 'Elfenbein',
        'en-US': 'Ivory',
      }),
      AttributeDraft.random().name('color-code').value('#FFFFF0'),
    ]);

export default ariaRug01;
