import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const edgarArmchair01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('EARM-04')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(129900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(129900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(129900))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Edgar_Armchair-1.1.jpeg'
        )
        .dimensions({ w: 5000, h: 4000 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Assembly on delivery',
        'de-DE': '- Montage bei Lieferung',
        'en-US': '- Assembly on delivery',
      }),
      AttributeDraft.random().name('colorlabel').value({
        'en-GB': 'Light Sage',
        'de-DE': 'Leichter Salbei',
        'en-US': 'Light Sage',
      }),
      AttributeDraft.random()
        .name('color')
        .value({ 'en-GB': '#B6C9B6', 'de-DE': '#B6C9B6', 'en-US': '#B6C9B6' }),
      AttributeDraft.random()
        .name('finishlabel')
        .value({ 'en-GB': 'Iron', 'de-DE': 'Eisen', 'en-US': 'Iron' }),
      AttributeDraft.random()
        .name('finish')
        .value({ 'en-GB': '#000', 'de-DE': '#000', 'en-US': '#000' }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#00FF00',
          label: { 'de-DE': 'Grün', 'en-GB': 'Green', 'en-US': 'Green' },
        }),
    ]);

export default edgarArmchair01;
