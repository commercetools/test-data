import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const sandTeaCup01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('STM-09')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(299))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(299))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(299))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Sand_Tea_Cup-1.1.jpeg'
        )
        .dimensions({ w: 6046, h: 4020 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Includes 1 mug',
        'en-US': '- Includes 1 mug',
        'de-DE': '- Enthält 1 Tasse',
      }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({ 'en-GB': 'Sand', 'de-DE': 'Sand', 'en-US': 'Sand' }),
      AttributeDraft.random()
        .name('color')
        .value({ 'en-GB': '#FFDC94', 'de-DE': '#FFDC94', 'en-US': '#FFDC94' }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#F5F5DC',
          label: { 'de-DE': 'Beige', 'en-GB': 'Beige', 'en-US': 'Beige' },
        }),
    ]);

export default sandTeaCup01;
