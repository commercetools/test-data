import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const modernGoldCoffeeTable01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('GMCT-01')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(25999))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(25999))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(25999))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305817901-_VzWvTVC.jpeg'
        )
        .dimensions({ w: 2500, h: 2500 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305817943-3J3g-cMr.jpeg'
        )
        .dimensions({ w: 2500, h: 2500 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305817870-vzJpmAw7.jpeg'
        )
        .dimensions({ w: 2500, h: 2500 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_305818013-8aFJP8rs.jpeg'
        )
        .dimensions({ w: 2500, h: 2500 }),
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
        .value({ 'en-US': 'gold', 'en-GB': 'gold', 'de-DE': 'gold' }),
      AttributeDraft.random()
        .name('finishlabel')
        .value({ 'en-US': 'Gold', 'en-GB': 'Gold', 'de-DE': 'Gold' }),
      AttributeDraft.random().name('productspec').value({
        'en-US':
          '- Length: 5 feet\n- Width: 3 feet\n- Height: 2 feet\n- Tables made of plastic laminate on manufactured wood\n- Gold finish on legs\n- Preassembled',
        'en-GB':
          '- Length: 5 feet\n- Width: 3 feet\n- Height: 2 feet\n- Tables made of plastic laminate on manufactured wood\n- Gold finish on legs\n- Preassembled',
        'de-DE':
          '- Length: 5 feet\n- Width: 3 feet\n- Height: 2 feet\n- Tables made of plastic laminate on manufactured wood\n- Gold finish on legs\n- Preassembled',
      }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#FFF',
          label: { 'de-DE': 'Weiss', 'en-GB': 'White', 'en-US': 'White' },
        }),
    ]);

export default modernGoldCoffeeTable01;
