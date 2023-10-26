import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
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
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Traditional_L_Seater_Sofa-1.2.jpeg'
        )
        .dimensions({ w: 2500, h: 2500 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Traditional_L_Seater_Sofa-1.1.jpeg'
        )
        .dimensions({ w: 2500, h: 2500 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Traditional_L_Seater_Sofa-1.3.jpeg'
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
