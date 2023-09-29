import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const juteRug01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('JAR-08')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(39900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(39900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(39900))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_449539663-lSkaNtxb.jpeg'
        )
        .dimensions({ w: 7600, h: 5223 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_447839385-wEisIxmE.jpeg'
        )
        .dimensions({ w: 5760, h: 3840 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_405760748-jH1fNEXu.jpeg'
        )
        .dimensions({ w: 5760, h: 3840 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- 10ft x 12ft',
        'de-DE': '- 10 Fuß x 12 Fuß',
        'en-US': '- 10ft x 12ft',
      }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#F5F5DC',
          label: { 'de-DE': 'Beige', 'en-GB': 'Beige', 'en-US': 'Beige' },
        }),
      AttributeDraft.random()
        .name('finishlabel')
        .value({ 'en-GB': 'Jute', 'de-DE': 'Jute', 'en-US': 'Jute' }),
      AttributeDraft.random()
        .name('finish')
        .value({ 'en-GB': '#EEDA99', 'de-DE': '#EEDA99', 'en-US': '#EEDA99' }),
    ]);

export default juteRug01;
