import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const emeraldVelvetChair01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('VARM-09')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(39900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(39900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(39900))
        .country('US'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_298830220-MjoqNbBu.jpeg'
        )
        .dimensions({ w: 6000, h: 4800 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Dry clean only',
        'de-DE': '- Nur chemische Reinigung',
        'en-US': '- Dry clean only',
      }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({ 'en-GB': 'Emerald', 'de-DE': 'Smaragd', 'en-US': 'Emerald' }),
      AttributeDraft.random()
        .name('color')
        .value({ 'en-GB': '#219A0E', 'de-DE': '#219A0E', 'en-US': '#219A0E' }),
      AttributeDraft.random()
        .name('finishlabel')
        .value({ 'en-GB': 'Gold', 'de-DE': 'Gold', 'en-US': 'Gold' }),
      AttributeDraft.random()
        .name('finish')
        .value({ 'en-GB': '#F8EE18', 'de-DE': '#F8EE18', 'en-US': '#F8EE18' }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#00FF00',
          label: { 'de-DE': 'Grün', 'en-GB': 'Green', 'en-US': 'Green' },
        }),
    ]);

export default emeraldVelvetChair01;
