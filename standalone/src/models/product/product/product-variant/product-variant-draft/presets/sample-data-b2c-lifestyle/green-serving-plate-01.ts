import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const greenServingPlate01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('greenServingPlate01')
    .sku('GC-01')
    .prices([
      PriceDraft.presets
        .empty()
        .key('599EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(599))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('599GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(599))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('599USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(599))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Green_Serving_Plate-1.1.jpeg'
        )
        .dimensions({ w: 4631, h: 4426 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Green_Serving_Plate-1.2.jpeg'
        )
        .dimensions({ w: 5705, h: 3653 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Includes 1 plate',
        'de-DE': '- Enthält 1 Teller',
        'en-US': '- Includes 1 plate',
      }),
      AttributeDraft.random().name('search-color').value('green'),
      AttributeDraft.random().name('color-label').value({
        'en-GB': 'Green',
        'de-DE': 'Grün',
        'en-US': 'Green',
      }),
      AttributeDraft.random().name('color-code').value('#008000'),
    ]);

export default greenServingPlate01;
