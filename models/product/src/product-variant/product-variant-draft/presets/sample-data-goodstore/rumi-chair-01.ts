import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const rumiChair01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('RAM-094')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(12999))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(12999))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(15000))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Rumi%20Chair-3pTPQ9ss.jpeg'
        )
        .dimensions({ w: 2400, h: 3200 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Dry clean only',
        'en-US': '- Dry clean only',
        'de-DE': '- Nur chemische Reinigung',
      }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#A020F0',
          label: { 'de-DE': 'Lila', 'en-GB': 'Purple', 'en-US': 'Purple' },
        }),
      AttributeDraft.random()
        .name('color')
        .value({ 'en-GB': '#968289', 'de-DE': '#968289', 'en-US': '#968289' }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({ 'en-GB': 'Mauve', 'de-DE': 'Mauve', 'en-US': 'Mauve' }),
      AttributeDraft.random()
        .name('finish')
        .value({ 'en-GB': '#DAB555', 'en-US': '#DAB555', 'de-DE': '#DAB555' }),
      AttributeDraft.random()
        .name('finishlabel')
        .value({ 'en-GB': 'Gold', 'de-DE': 'Gold', 'en-US': 'Gold' }),
    ]);

export default rumiChair01;
