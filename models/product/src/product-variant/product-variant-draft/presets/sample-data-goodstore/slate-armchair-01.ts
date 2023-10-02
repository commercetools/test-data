import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const slateArmchair01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('SARM-09')
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
      ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_209944147-LGzWeBna.jpeg'
        )
        .dimensions({ w: 5009, h: 4004 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/AdobeStock_220496250-oK34fG4v.jpeg'
        )
        .dimensions({ w: 5544, h: 3498 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Includes ottoman',
        'en-US': '- Includes ottoman',
        'de-DE': '- Inklusive Ottomane',
      }),
      AttributeDraft.random()
        .name('color')
        .value({ 'en-GB': '#989898', 'de-DE': '#989898', 'en-US': '#989898' }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({ 'en-GB': 'Slate', 'de-DE': 'Schiefer', 'en-US': 'Slate' }),
    ]);

export default slateArmchair01;
