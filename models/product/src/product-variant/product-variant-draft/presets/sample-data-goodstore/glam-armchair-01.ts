import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const glamArmchair01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('GARM-093')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(59900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(59900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(59900))
        .country('US'),
    ])
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_379387886-WRoNTpOE.jpeg'
        )
        .dimensions({ w: 5500, h: 4400 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Dry clean only\n- Pillow included',
        'de-DE': '- Nur chemische Reinigung\n- Kissen inklusive',
        'en-US': '- Dry clean only\n- Pillow included',
      }),
      AttributeDraft.random()
        .name('color')
        .value({ 'en-GB': '#FECB69', 'de-DE': '#FECB69', 'en-US': '#FECB69' }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({ 'en-GB': 'Gold', 'de-DE': 'Gold', 'en-US': 'Gold' }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#FFD700',
          label: { 'de-DE': 'Gold', 'en-GB': 'Gold', 'en-US': 'Gold' },
        }),
      AttributeDraft.random()
        .name('finish')
        .value({ 'en-GB': '#FFDF7F', 'de-DE': '#FFDF7F', 'en-US': '#FFDF7F' }),
      AttributeDraft.random()
        .name('finishlabel')
        .value({ 'en-GB': 'Brass', 'de-DE': 'Messing', 'en-US': 'Brass' }),
    ]);

export default glamArmchair01;
