import { MoneyDraft, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const traditionalThreeSeaterSofa01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('TTSS-01')
    .prices([
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(239900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(239900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('USD').centAmount(239900))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Traditional_Three_Seater_Sofa-1.3.jpeg'
        )
        .dimensions({ w: 2500, h: 2500 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Traditional_Three_Seater_Sofa-1.1.jpeg'
        )
        .dimensions({ w: 2500, h: 2500 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Traditional_Three_Seater_Sofa-1.2.jpeg'
        )
        .dimensions({ w: 5760, h: 3840 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-US': '- Three seater sofa\n- Velvet upholstery\n- Assembly on site',
        'en-GB': '- Three seater sofa\n- Velvet upholstery\n- Assembly on site',
        'de-DE': '- Dreisitzer\n- Samtbezug\n- Selbstmontage',
      }),
      AttributeDraft.random()
        .name('color')
        .value({ 'en-US': '#09331c', 'en-GB': '#09331c', 'de-DE': '#09331c' }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({ 'en-US': 'Emerald', 'en-GB': 'Emerald', 'de-DE': 'Emerald' }),
      AttributeDraft.random()
        .name('finish')
        .value({ 'en-US': '#202120', 'en-GB': '#202120', 'de-DE': '#202120' }),
      AttributeDraft.random().name('finishlabel').value({
        'en-US': 'Espresso',
        'en-GB': 'Espresso',
        'de-DE': 'Espresso',
      }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#00FF00',
          label: { 'de-DE': 'Grün', 'en-GB': 'Green', 'en-US': 'Green' },
        }),
    ]);

export default traditionalThreeSeaterSofa01;
