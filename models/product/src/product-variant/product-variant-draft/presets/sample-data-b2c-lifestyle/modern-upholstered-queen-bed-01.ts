import { MoneyDraft, PriceDraft } from '@commercetools-test-data/commons';
import { TBuilder } from '@commercetools-test-data/core';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import * as ProductVariantDraft from '../../index';

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
      AttributeDraft.random().name('color').value({
        'en-US': 'White:#FFFFFF',
        'en-GB': 'White:#FFFFFF',
        'de-DE': 'Weiß:#FFFFFF',
      }),
      AttributeDraft.random().name('finish').value({
        'en-US': 'Black:#000000',
        'en-GB': 'Black:#000000',
        'de-DE': 'Schwarz:#000000',
      }),
      AttributeDraft.random().name('productspec').value({
        'en-US':
          '- Cotton Upholstery \n- Standard Queen size\n- Assembly on site',
        'en-GB':
          '- Cotton Upholstery \n- Standard Queen size\n- Assembly on site',
        'de-DE':
          '- Cotton Upholstery \n- Standard Queen size\n- Assembly on site',
      }),
    ]);

export default modernUpholsteredQueenBed01;
