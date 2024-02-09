import { MoneyDraft, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const minimalistModernSideTable02 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('MMST-02')
    .prices([
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(4999))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(4999))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('USD').centAmount(4999))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Minimalist_Modern_Side_Table-2.1.jpeg'
        )
        .dimensions({ w: 5883, h: 6026 }),
    ])
    .attributes([
      AttributeDraft.random()
        .name('finishlabel')
        .value({ 'en-US': 'Walnut', 'en-GB': 'Walnut', 'de-DE': 'Walnut' }),
      AttributeDraft.random()
        .name('color')
        .value({ 'en-US': '#d69169', 'en-GB': '#d69169', 'de-DE': '#d69169' }),
      AttributeDraft.random().name('colorlabel').value({
        'en-US': 'Golden Pecan',
        'en-GB': 'Golden Pecan',
        'de-DE': 'Golden Pecan',
      }),
      AttributeDraft.random()
        .name('finish')
        .value({ 'en-US': '#d69169', 'en-GB': '#d69169', 'de-DE': '#d69169' }),
      AttributeDraft.random().name('productspec').value({
        'en-US': '- 4 legged side table\n- Walnut legs\n- Pre-assembled',
        'en-GB': '- 4 legged side table\n- Walnut legs\n- Pre-assembled',
        'de-DE': '- 4 legged side table\n- Walnut legs\n- Pre-assembled',
      }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#D2B48C',
          label: { 'de-DE': 'Bräunen', 'en-GB': 'Tan', 'en-US': 'Tan' },
        }),
    ]);

export default minimalistModernSideTable02;
