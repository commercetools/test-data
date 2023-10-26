import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const rattanLoungeChair01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('RLC-08')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(19900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(19900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(19900))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Rattan_Lounge_Chair-1.1.jpeg'
        )
        .dimensions({ w: 5000, h: 4000 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Rattan_Lounge_Chair-1.2.jpeg'
        )
        .dimensions({ w: 3375, h: 4500 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Includes 2 cushions for seat and backrest',
        'en-US': '- Includes 2 cushions for seat and backrest',
        'de-DE': '- Inklusive 2 Kissen für Sitz und Rückenlehne',
      }),
      AttributeDraft.random()
        .name('color')
        .value({ 'en-GB': '#EDEBE8', 'de-DE': '#EDEBE8', 'en-US': '#EDEBE8' }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({ 'en-GB': 'Pearl', 'de-DE': 'Perle', 'en-US': 'Pearl' }),
      AttributeDraft.random()
        .name('finishlabel')
        .value({ 'en-GB': 'Rattan', 'de-DE': 'Rattan', 'en-US': 'Rattan' }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#808080',
          label: { 'de-DE': 'Grau', 'en-GB': 'Gray', 'en-US': 'Gray' },
        }),
      AttributeDraft.random()
        .name('finish')
        .value({ 'en-GB': '#E0AC58', 'en-US': '#E0AC58', 'de-DE': '#E0AC58' }),
    ]);

export default rattanLoungeChair01;
