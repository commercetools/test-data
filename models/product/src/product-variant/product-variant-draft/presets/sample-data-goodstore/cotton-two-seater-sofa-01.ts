import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const cottonTwoSeaterSofa01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('CTSS-0983')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(54900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(54900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(54900))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_225174101-6XExeL2D.jpeg'
        )
        .dimensions({ w: 5035, h: 2969 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_202436963-ZB2HxGeB.jpeg'
        )
        .dimensions({ w: 1000, h: 637 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_377510554-dyXzuIQC.jpeg'
        )
        .dimensions({ w: 5760, h: 3840 }),
    ])
    .attributes([
      AttributeDraft.random()
        .name('color')
        .value({ 'en-GB': '#FFF', 'de-DE': '#FFF', 'en-US': '#FFF' }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({ 'en-GB': 'White', 'de-DE': 'Weiß', 'en-US': 'White' }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#FFF',
          label: { 'de-DE': 'Weiss', 'en-GB': 'White', 'en-US': 'White' },
        }),
    ]);

export default cottonTwoSeaterSofa01;
