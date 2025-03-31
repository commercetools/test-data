import { MoneyDraft, PriceDraft } from '@commercetools-test-data/commons';
import { TBuilder } from '@commercetools-test-data/core';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const cloudQueenBed01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('cloudQueenBed01')
    .sku('CQB-09')
    .prices([
      PriceDraft.presets
        .empty()
        .key('45999EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(45999))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('45999GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(45999))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('45999USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(45999))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cloud_Queen_Bed-1.1.jpeg'
        )
        .dimensions({ w: 5000, h: 3621 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Cloud_Queen_Bed-1.2.jpeg'
        )
        .dimensions({ w: 5000, h: 3621 }),
    ])
    .attributes([
      AttributeDraft.random().name('color').value({
        'en-GB': 'Light Blue:#ADD8E6',
        'de-DE': 'Hell blau:#ADD8E6',
        'en-US': 'Light Blue:#ADD8E6',
      }),
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Assembly is included',
        'de-DE': '- Die Montage ist im Preis inbegriffen',
        'en-US': '- Assembly is included',
      }),
    ]);

export default cloudQueenBed01;
