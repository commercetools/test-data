import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const mayaPillowCover01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('MPC-02')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(899))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('GBP').centAmount(899))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(899))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Maya_Pillow_Cover-1.1.jpeg'
        )
        .dimensions({ w: 6240, h: 4160 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Machine washable\n- Does not include pillow',
        'de-DE':
          '- Waschmaschinenfest\n- Kissen nicht im Lieferumfang enthalten',
        'en-US': '- Machine washable\n- Does not include pillow',
      }),
      AttributeDraft.random()
        .name('color')
        .value({ 'en-GB': '#756960', 'de-DE': '#756960', 'en-US': '#756960' }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({ 'en-GB': 'Mauve', 'de-DE': 'Mauve', 'en-US': 'Mauve' }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#A020F0',
          label: { 'de-DE': 'Lila', 'en-GB': 'Purple', 'en-US': 'Purple' },
        }),
    ]);

export default mayaPillowCover01;
