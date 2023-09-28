import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const benPillowCover01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('LBPC-09')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(1299))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(1299))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(1299))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://2eca75039cf911b9bbe5-79bfd3e36f011d786971804e873c4354.ssl.cf3.rackcdn.com/Ben%20Pillow%20Cover-EQp6ZHZK.jpeg'
        )
        .dimensions({ w: 6240, h: 4160 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB':
          '- Machine-washable\n- Cover is removable\n- Does not include pillow',
        'de-DE':
          '- Waschmaschinenfest\n- Bezug ist abnehmbar\n- Kissen nicht im Lieferumfang enthalten',
        'en-US':
          '- Machine-washable\n- Cover is removable\n- Does not include pillow',
      }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#D2B48C',
          label: { 'de-DE': 'Bräunen', 'en-GB': 'Tan', 'en-US': 'Tan' },
        }),
      AttributeDraft.random()
        .name('color')
        .value({ 'en-GB': '#A69465', 'de-DE': '#A69465', 'en-US': '#A69465' }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({ 'en-GB': 'Tan', 'de-DE': 'Bräunen', 'en-US': 'Tan' }),
    ]);

export default benPillowCover01;
