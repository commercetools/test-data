import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const cubeJuteBasket01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('CJB-01')
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
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Cube_Jute_Basket-1.1.jpeg'
        )
        .dimensions({ w: 4684, h: 3564 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Jute\n- Preassembled\n- 1ft x 1ft x 1ft',
        'de-DE': '- Jute\n- Vormontiert\n- 1 Fuß x 1 Fuß x 1 Fuß',
        'en-US': '- Jute\n- Preassembled\n- 1ft x 1ft x 1ft',
      }),
      AttributeDraft.random()
        .name('color-filter')
        .value({
          key: '#D2B48C',
          label: { 'de-DE': 'Bräunen', 'en-GB': 'Tan', 'en-US': 'Tan' },
        }),
      AttributeDraft.random()
        .name('color')
        .value({ 'en-GB': '#EEB348', 'de-DE': '#EEB348', 'en-US': '#EEB348' }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({ 'en-GB': 'Jute', 'de-DE': 'Jute', 'en-US': 'Jute' }),
    ]);

export default cubeJuteBasket01;
