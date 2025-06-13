import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const modernUpholsteredQueenBed01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('modernUpholsteredQueenBed01')
    .sku('MUQB-01')
    .prices([
      PriceDraft.presets
        .empty()
        .key('259900EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(259900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('259900GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(259900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('259900USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(259900))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Upholstered_Queen_Bed-1.1.jpeg'
        )
        .dimensions({ w: 6000, h: 6000 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-US':
          '- Cotton Upholstery \n- Standard Queen size\n- Assembly on site',
        'en-GB':
          '- Cotton Upholstery \n- Standard Queen size\n- Assembly on site',
        'de-DE':
          '- Cotton Upholstery \n- Standard Queen size\n- Assembly on site',
      }),
      AttributeDraft.random()
        .name('search-color')
        .value([
          {
            'en-US': 'White',
            'en-GB': 'White',
            'de-DE': 'Weiß',
          },
        ]),
      AttributeDraft.random()
        .name('search-finish')
        .value([
          {
            'en-US': 'Black',
            'en-GB': 'Black',
            'de-DE': 'Schwarz',
          },
        ]),
      AttributeDraft.random().name('color-label').value({
        'en-GB': 'White',
        'de-DE': 'Weiß',
        'en-US': 'White',
      }),
      AttributeDraft.random().name('finish-label').value({
        'en-GB': 'Black',
        'de-DE': 'Schwarz',
        'en-US': 'Black',
      }),
      AttributeDraft.random().name('color-code').value({
        'en-US': '#FFFFFF',
        'en-GB': '#FFFFFF',
        'de-DE': '#FFFFFF',
      }),
      AttributeDraft.random().name('finish-code').value({
        'en-US': '#000000',
        'en-GB': '#000000',
        'de-DE': '#000000',
      }),
    ]);

export default modernUpholsteredQueenBed01;
