import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const patternedPillowCover01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('ADPC-09')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(1499))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(1499))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(1499))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Mahogany%20Pillow%20Cove-Jn9Kw_NO.jpeg'
        )
        .dimensions({ w: 6240, h: 4160 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Machine washable\n- Pillow not included',
        'de-DE':
          '- Waschmaschinenfest\n- Kissen nicht im Lieferumfang enthalten',
        'en-US': '- Machine washable\n- Pillow not included',
      }),
      AttributeDraft.random()
        .name('color')
        .value({ 'en-GB': '#9c9087', 'de-DE': '#9c9087', 'en-US': '#9c9087' }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({ 'en-GB': 'Mauve', 'de-DE': 'Mauve', 'en-US': 'Mauve' }),
      AttributeDraft.random().name('new-arrival').value(false),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#A020F0',
          label: { 'de-DE': 'Lila', 'en-GB': 'Purple', 'en-US': 'Purple' },
        }),
    ]);

export default patternedPillowCover01;
