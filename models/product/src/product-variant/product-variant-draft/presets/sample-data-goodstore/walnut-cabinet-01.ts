import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const walnutCabinet01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('WCS-09')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(159900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(159900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(159900))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_35902325-W9YJNJS_.jpeg'
        )
        .dimensions({ w: 4400, h: 2935 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_35911040-3WO5GjjU.jpeg'
        )
        .dimensions({ w: 4400, h: 2935 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Assembly included in delivery',
        'en-US': '- Assembly included in delivery',
        'de-DE': '- Montage im Lieferumfang enthalten',
      }),
      AttributeDraft.random()
        .name('finishlabel')
        .value({ 'en-GB': 'Walnut', 'de-DE': 'Nussbaum', 'en-US': 'Walnut' }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#964B00',
          label: {
            'de-DE': 'Dunkelbraun',
            'en-GB': 'Dark Brown',
            'en-US': 'Dark Brown',
          },
        }),
      AttributeDraft.random()
        .name('finish')
        .value({ 'en-GB': '#7A5905', 'en-US': '#7A5905', 'de-DE': '#7A5905' }),
    ]);

export default walnutCabinet01;
