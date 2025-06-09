import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const rectangleServingTray01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('rectangleServingTray01')
    .sku('RST-02')
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
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Rectangle_Serving_Tray-1.1.jpeg'
        )
        .dimensions({ w: 6048, h: 4024 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Hand wash only\n- Natural wood',
        'en-US': '- Hand wash only\n- Natural wood',
        'de-DE': '- Handwäsche nur\n- Naturholz',
      }),
      AttributeDraft.random()
        .name('search-color')
        .value([
          {
            'en-US': 'Brown',
            'en-GB': 'Brown',
            'de-DE': 'Braun',
          },
        ]),
      AttributeDraft.random().name('color-label').value({
        'en-GB': 'Brown',
        'de-DE': 'Braun',
        'en-US': 'Brown',
      }),
      AttributeDraft.random().name('color-code').value({
        'en-US': '#a52a2a',
        'en-GB': '#a52a2a',
        'de-DE': '#a52a2a',
      }),
    ]);

export default rectangleServingTray01;
