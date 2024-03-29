import { MoneyDraft, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const ivoryLoungeChair01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('ILC-01')
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
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Ivory_Lounge_Chair-1.1.jpeg'
        )
        .dimensions({ w: 5500, h: 4400 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Ivory_Lounge_Chair-1.2.jpeg'
        )
        .dimensions({ w: 3375, h: 4500 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Ivory_Lounge_Chair-1.3.jpeg'
        )
        .dimensions({ w: 3750, h: 5000 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Dry clean only\n- Assembly included in delivery',
        'de-DE':
          '- Nur chemische Reinigung\n- Montage im Lieferumfang enthalten',
        'en-US': '- Dry clean only\n- Assembly included in delivery',
      }),
      AttributeDraft.random()
        .name('color')
        .value({ 'en-GB': '#FFF', 'de-DE': '#FFF', 'en-US': '#FFF' }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({ 'en-GB': 'Ivory', 'de-DE': 'Elfenbein', 'en-US': 'Ivory' }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#FFF',
          label: { 'de-DE': 'Weiss', 'en-GB': 'White', 'en-US': 'White' },
        }),
    ]);

export default ivoryLoungeChair01;
