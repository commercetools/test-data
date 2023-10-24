import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const ariaRug01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('AAR-34')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(12499))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(12499))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(12499))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Aria_Rug-1.1.jpeg'
        )
        .dimensions({ w: 5200, h: 3900 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Aria_Rug-1.2.jpeg'
        )
        .dimensions({ w: 5200, h: 3900 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Aria_Rug-1.3.jpeg'
        )
        .dimensions({ w: 5200, h: 3900 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Aria_Rug-1.4.jpeg'
        )
        .dimensions({ w: 5200, h: 3900 }),
    ])
    .attributes([
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#FFFFF0',
          label: { 'de-DE': 'Elfenbein', 'en-GB': 'Ivory', 'en-US': 'Ivory' },
        }),
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Dry clean only\n- 5ft x 7ft',
        'de-DE': '- Nur chemische Reinigung\n- 5 Fuß x 7 Fuß',
        'en-US': '- Dry clean only\n- 5ft x 7ft',
      }),
      AttributeDraft.random()
        .name('color')
        .value({ 'en-GB': '#DED6D1', 'de-DE': '#DED6D1', 'en-US': '#DED6D1' }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({ 'en-GB': 'Ivory', 'de-DE': 'Elfenbein', 'en-US': 'Ivory' }),
    ]);

export default ariaRug01;
