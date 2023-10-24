import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const idunPillowCover01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('IPC-09')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(1399))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(1399))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(1399))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Idun_Pillow_Cover-1.1.jpeg'
        )
        .dimensions({ w: 5994, h: 3996 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Machine washable\n- Pillow not included',
        'de-DE':
          '- Waschmaschinenfest\n- Kissen nicht im Lieferumfang enthalten',
        'en-US': '- Machine washable\n- Pillow not included',
      }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#964B00',
          label: {
            'de-DE': 'Dunkelbraun',
            'en-GB': 'Dark Brown',
            'en-US': 'Dark Brown',
          },
        }),
      AttributeDraft.random()
        .name('color')
        .value({ 'en-GB': '#9B614C', 'de-DE': '#9B614C', 'en-US': '#9B614C' }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({ 'en-GB': 'Copper', 'de-DE': 'Kupfer', 'en-US': 'Copper' }),
    ]);

export default idunPillowCover01;
