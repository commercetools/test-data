import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const luxePillowCover01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('LPC-011')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(2599))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(2599))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(2599))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Luxe_Pillow_Cover-1.1.jpeg'
        )
        .dimensions({ w: 6123, h: 4082 }),
    ])
    .attributes([
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#000',
          label: { 'de-DE': 'Schwarz', 'en-GB': 'Black', 'en-US': 'Black' },
        }),
      AttributeDraft.random()
        .name('color')
        .value({ 'en-GB': '#000', 'de-DE': '#000', 'en-US': '#000' }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({ 'en-GB': 'Black', 'de-DE': 'Schwarz', 'en-US': 'Black' }),
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Machine washable\n- Pillow not included',
        'de-DE':
          '- Waschmaschinenfest\n- Kissen nicht im Lieferumfang enthalten',
        'en-US': '- Machine washable\n- Pillow not included',
      }),
    ]);

export default luxePillowCover01;
