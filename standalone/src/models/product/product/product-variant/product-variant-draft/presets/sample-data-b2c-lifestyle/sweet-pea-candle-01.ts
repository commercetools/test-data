import { TBuilder } from '../../../../../../core';
import { MoneyDraft, PriceDraft } from '../../../../../commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const sweetPeaCandle01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('sweetPeaCandle01')
    .sku('SPC-01')
    .prices([
      PriceDraft.presets
        .empty()
        .key('699EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(699))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('699GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(699))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('699USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(699))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Sweet_Pea_Candle-1.1.jpeg'
        )
        .dimensions({ w: 5540, h: 3693 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Sweet_Pea_Candle-1.2.jpeg'
        )
        .dimensions({ w: 6720, h: 4480 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Sweet_Pea_Candle-1.3.jpeg'
        )
        .dimensions({ w: 6640, h: 4427 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Comes in glass jar\n- 180 grams',
        'en-US': '- Comes in glass jar\n- 180 grams',
        'de-DE': '- Wird im Glas geliefert\n- 180 Gramm',
      }),
      AttributeDraft.random().name('color').value({
        'en-GB': 'Pink:#FFC0CB',
        'de-DE': 'Rosa:#FFC0CB',
        'en-US': 'Pink:#FFC0CB',
      }),
      AttributeDraft.random().name('finish').value({
        'en-GB': 'Glass:transparent',
        'de-DE': 'Glas:transparent',
        'en-US': 'Glass:transparent',
      }),
    ]);

export default sweetPeaCandle01;
