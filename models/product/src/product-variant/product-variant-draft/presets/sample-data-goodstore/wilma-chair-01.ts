import { MoneyDraft, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const wilmaChair01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('NJOP-09')
    .prices([
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(29900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(29900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('USD').centAmount(29900))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Wilma_Chair-1.1.jpeg'
        )
        .dimensions({ w: 2400, h: 3200 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Wilma_Chair-1.2.jpeg'
        )
        .dimensions({ w: 2400, h: 3200 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Cushion covers are removable and machine washable',
        'en-US': '- Cushion covers are removable and machine washable',
        'de-DE': '- Kissenbezüge sind abnehmbar und maschinenwaschbar',
      }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({ 'en-GB': 'Cream', 'de-DE': 'Creme', 'en-US': 'Cream' }),
      AttributeDraft.random().name('finishlabel').value({
        'en-GB': 'Black Iron',
        'de-DE': 'Schwarzes Eisen',
        'en-US': 'Black Iron',
      }),
      AttributeDraft.random()
        .name('finish')
        .value({ 'en-GB': '#000', 'en-US': '#000', 'de-DE': '#000' }),
      AttributeDraft.random()
        .name('color')
        .value({ 'en-GB': '#E4DCC1', 'de-DE': '#E4DCC1', 'en-US': '#E4DCC1' }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#FFFFF0',
          label: { 'de-DE': 'Elfenbein', 'en-GB': 'Ivory', 'en-US': 'Ivory' },
        }),
    ]);

export default wilmaChair01;
