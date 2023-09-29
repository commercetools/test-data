import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const traditionalLSeaterSofa01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('TLSS-01')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(359900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(359900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(359900))
        .country('US'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305739649-_ZXpDL48.jpeg'
        )
        .dimensions({ w: 2500, h: 2500 }),
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305739419-AmHTon4o.jpeg'
        )
        .dimensions({ w: 2500, h: 2500 }),
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305740930-1rFVdtIo.jpeg'
        )
        .dimensions({ w: 5760, h: 3840 }),
    ])
    .attributes([
      AttributeDraft.random()
        .name('color')
        .value({ 'en-US': '#ebe6e1', 'en-GB': '#ebe6e1', 'de-DE': '#ebe6e1' }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({ 'en-US': 'Beige', 'en-GB': 'Beige', 'de-DE': 'Beige' }),
      AttributeDraft.random()
        .name('finish')
        .value({ 'en-US': '#2e2822', 'en-GB': '#2e2822', 'de-DE': '#2e2822' }),
      AttributeDraft.random().name('finishlabel').value({
        'en-US': 'Espresso',
        'en-GB': 'Espresso',
        'de-DE': 'Espresso',
      }),
      AttributeDraft.random().name('productspec').value({
        'en-US':
          '- Cotton upholstery\n- Comes with accent pillows\n- Assembly on site',
        'en-GB':
          '- Cotton upholstery\n- Comes with accent pillows\n- Assembly on site',
        'de-DE':
          '- Baumwollbezug\n- Wurfkissen um Lieferumfang enthalten\n- Selbstmontage',
      }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#F5F5DC',
          label: { 'de-DE': 'Beige', 'en-GB': 'Beige', 'en-US': 'Beige' },
        }),
    ]);

export default traditionalLSeaterSofa01;
