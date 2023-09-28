import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const cloudQueenBed01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('CQB-09')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(45999))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(45999))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(45999))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_523480805-mqjgJyAt.jpeg'
        )
        .dimensions({ w: 5000, h: 3621 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Cloud%20Queen%20Bed-Hz3YEb5q.jpeg'
        )
        .dimensions({ w: 5000, h: 3621 }),
    ])
    .attributes([
      AttributeDraft.random().name('colorlabel').value({
        'en-GB': 'Light Blue',
        'de-DE': 'Hellblau',
        'en-US': 'Light Blue',
      }),
      AttributeDraft.random()
        .name('color')
        .value({ 'en-GB': '#D4EEF2', 'de-DE': '#D4EEF2', 'en-US': '#D4EEF2' }),
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Assembly is included',
        'de-DE': '- Die Montage ist im Preis inbegriffen',
        'en-US': '- Assembly is included',
      }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#0000FF',
          label: { 'de-DE': 'Blau', 'en-GB': 'Blue', 'en-US': 'Blue' },
        }),
    ]);

export default cloudQueenBed01;
