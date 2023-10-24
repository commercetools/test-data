import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const entrywayCloset01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('EWC-07')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(259900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(259900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(259900))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Entryway_Closet-1.1.jpeg'
        )
        .dimensions({ w: 5500, h: 4125 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Entryway_Closet-1.2.jpeg'
        )
        .dimensions({ w: 4700, h: 4512 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Entryway_Closet-1.3.jpeg'
        )
        .dimensions({ w: 5500, h: 4125 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Assembly included in delivery',
        'de-DE': '- Montage im Lieferumfang enthalten',
        'en-US': '- Assembly included in delivery',
      }),
      AttributeDraft.random().name('finishlabel').value({
        'en-GB': 'White Oak',
        'de-DE': 'weiße Eiche',
        'en-US': 'White Oak',
      }),
      AttributeDraft.random()
        .name('finish')
        .value({ 'en-GB': '#EFDBB4', 'de-DE': '#EFDBB4', 'en-US': '#EFDBB4' }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#F5F5DC',
          label: { 'de-DE': 'Beige', 'en-GB': 'Beige', 'en-US': 'Beige' },
        }),
    ]);

export default entrywayCloset01;
