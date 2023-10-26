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
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Leather_Weave_Chair-1.1.jpeg'
        )
        .dimensions({ w: 5500, h: 4400 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Leather_Weave_Chair-1.2.jpeg'
        )
        .dimensions({ w: 3375, h: 4500 }),
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
