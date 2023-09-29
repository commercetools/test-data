import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const leatherWeaveChair01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('BA-092')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(39900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(34900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(39900))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_426344321-mhfsESbj.jpeg'
        )
        .dimensions({ w: 5500, h: 4400 }),
    ])
    .attributes([
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#D2B48C',
          label: { 'de-DE': 'Bräunen', 'en-GB': 'Tan', 'en-US': 'Tan' },
        }),
      AttributeDraft.random().name('new-arrival').value(true),
      AttributeDraft.random()
        .name('finishlabel')
        .value({ 'en-GB': 'Oak', 'de-DE': 'Eiche', 'en-US': 'Oak' }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({ 'en-GB': 'Tan', 'de-DE': 'Bräunen', 'en-US': 'Tan' }),
      AttributeDraft.random()
        .name('color')
        .value({ 'en-GB': '#BC5724', 'de-DE': '#BC5724', 'en-US': '#BC5724' }),
      AttributeDraft.random()
        .name('finish')
        .value({ 'en-GB': '#E3AF81', 'de-DE': '#E3AF81', 'en-US': '#E3AF81' }),
    ]);

export default leatherWeaveChair01;
