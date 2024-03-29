import { MoneyDraft, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const brunoChair01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('BARM-03')
    .prices([
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(7999))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(7999))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('USD').centAmount(7999))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Bruno_Chair-1.1.jpeg'
        )
        .dimensions({ w: 6473, h: 4315 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Includes 1 chair',
        'de-DE': '- Beinhaltet 1 Stuhl',
        'en-US': '- Includes 1 chair',
      }),
      AttributeDraft.random()
        .name('color')
        .value({ 'en-GB': '#B29880', 'de-DE': '#B29880', 'en-US': '#B29880' }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({ 'en-GB': 'Beige', 'de-DE': 'Beige', 'en-US': 'Beige' }),
      AttributeDraft.random()
        .name('finishlabel')
        .value({ 'en-GB': 'Birch', 'de-DE': 'Birke', 'en-US': 'Birch' }),
      AttributeDraft.random()
        .name('finish')
        .value({ 'en-GB': '#FFC28D', 'de-DE': '#FFC28D', 'en-US': '#FFC28D' }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#F5F5DC',
          label: { 'de-DE': 'Beige', 'en-GB': 'Beige', 'en-US': 'Beige' },
        }),
    ]);

export default brunoChair01;
