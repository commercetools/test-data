import { MoneyDraft, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const sweetPeaCandle01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('SPC-01')
    .prices([
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(699))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(699))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('USD').centAmount(699))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Sweet_Pea_Candle-1.1.jpeg'
        )
        .dimensions({ w: 5540, h: 3693 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Sweet_Pea_Candle-1.2.jpeg'
        )
        .dimensions({ w: 6720, h: 4480 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Sweet_Pea_Candle-1.3.jpeg'
        )
        .dimensions({ w: 6640, h: 4427 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Comes in glass jar\n- 180 grams',
        'en-US': '- Comes in glass jar\n- 180 grams',
        'de-DE': '- Wird im Glas geliefert\n- 180 Gramm',
      }),
      AttributeDraft.random()
        .name('colorlabel')
        .value({ 'en-GB': 'Pink', 'de-DE': 'Rosa', 'en-US': 'Pink' }),
      AttributeDraft.random()
        .name('color')
        .value({ 'en-GB': '#FFD6E5', 'de-DE': '#FFD6E5', 'en-US': '#FFD6E5' }),
    ]);

export default sweetPeaCandle01;
