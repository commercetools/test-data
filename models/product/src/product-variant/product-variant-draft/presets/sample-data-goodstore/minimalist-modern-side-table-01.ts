import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const minimalistModernSideTable01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('MMST-01')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(12000))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(12000))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(12000))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Minimalist_Modern_Side_Table-1.1.jpeg'
        )
        .dimensions({ w: 6000, h: 6232 }),
    ])
    .attributes([
      AttributeDraft.random()
        .name('color')
        .value({ 'en-US': 'white', 'en-GB': '#FFF', 'de-DE': 'white' }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({ 'en-US': 'White', 'en-GB': 'White', 'de-DE': 'White' }),
      AttributeDraft.random()
        .name('finish')
        .value({ 'en-US': 'white', 'en-GB': '#FFF', 'de-DE': 'white' }),
      AttributeDraft.random()
        .name('finishlabel')
        .value({ 'en-US': 'Marble', 'en-GB': 'Marble', 'de-DE': 'Marble' }),
      AttributeDraft.random().name('productspec').value({
        'en-US': '- 4 legged side table\n- Walnut legs\n- Pre-assembled',
        'en-GB': '- 4 legged side table\n- Walnut legs\n- Pre-assembled',
        'de-DE': '- 4 legged side table\n- Walnut legs\n- Pre-assembled',
      }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#FFF',
          label: { 'de-DE': 'Weiss', 'en-GB': 'White', 'en-US': 'White' },
        }),
    ]);

export default minimalistModernSideTable01;
