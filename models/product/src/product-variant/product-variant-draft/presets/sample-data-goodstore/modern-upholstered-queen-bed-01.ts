import { MoneyDraft, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const modernUpholsteredQueenBed01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('MUQB-01')
    .prices([
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(259900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(259900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('USD').centAmount(259900))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Modern_Upholstered_Queen_Bed-1.1.jpeg'
        )
        .dimensions({ w: 6000, h: 6000 }),
    ])
    .attributes([
      AttributeDraft.random()
        .name('color')
        .value({ 'en-US': 'white', 'en-GB': 'white', 'de-DE': 'white' }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({ 'en-US': 'White', 'en-GB': 'White', 'de-DE': 'White' }),
      AttributeDraft.random()
        .name('finish')
        .value({ 'en-US': 'black', 'en-GB': 'black', 'de-DE': 'black' }),
      AttributeDraft.random()
        .name('finishlabel')
        .value({ 'en-US': 'Ebony', 'en-GB': 'Ebony', 'de-DE': 'Ebony' }),
      AttributeDraft.random().name('productspec').value({
        'en-US':
          '- Cotton Upholstery \n- Standard Queen size\n- Assembly on site',
        'en-GB':
          '- Cotton Upholstery \n- Standard Queen size\n- Assembly on site',
        'de-DE':
          '- Cotton Upholstery \n- Standard Queen size\n- Assembly on site',
      }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#FFF',
          label: { 'de-DE': 'Weiss', 'en-GB': 'White', 'en-US': 'White' },
        }),
    ]);

export default modernUpholsteredQueenBed01;
