import { MoneyDraft, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const orionDoubleBed01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('OTB-07')
    .prices([
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(159900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(159900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('USD').centAmount(159900))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Orion_Double_Bed-1.1.jpeg'
        )
        .dimensions({ w: 5000, h: 3621 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Assembly included at delivery\n- Mattress not included',
        'de-DE':
          '- Montage im Lieferumfang enthalten\n- Matratze nicht im Lieferumfang enthalten',
        'en-US': '- Assembly included at delivery\n- Mattress not included',
      }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({ 'en-GB': 'Sage', 'de-DE': 'Salbei', 'en-US': 'Sage' }),
      AttributeDraft.random()
        .name('color')
        .value({ 'en-GB': '#718C86', 'de-DE': '#718C86', 'en-US': '#718C86' }),
      AttributeDraft.random()
        .name('finishlabel')
        .value({ 'en-GB': 'Steel', 'de-DE': 'Stahl', 'en-US': 'Steel' }),
      AttributeDraft.random().name('finish').value({
        'en-GB': '#CCCCCC ',
        'de-DE': '#CCCCCC ',
        'en-US': '#CCCCCC ',
      }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#808080',
          label: { 'de-DE': 'Grau', 'en-GB': 'Gray', 'en-US': 'Gray' },
        }),
    ]);

export default orionDoubleBed01;
