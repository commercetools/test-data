import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const artDecoCoffeeTable01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('artDecoCoffeeTable01')
    .sku('ADCT-01')
    .prices([
      PriceDraft.presets
        .empty()
        .key('320000EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(320000))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('320000GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(320000))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('320000USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(320000))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Art_Deco_Coffee_Table-1.1.jpeg'
        )
        .dimensions({ w: 2500, h: 2500 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Art_Deco_Coffee_Table-1.2.jpeg'
        )
        .dimensions({ w: 5760, h: 3840 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-US': '- Granite top\n- 5ft by 3ft by 2ft\n- Preassembled',
        'en-GB': '- Granite top\n- 5ft by 3ft by 2ft\n- Preassembled',
        'de-DE': '- Granite top\n- 5ft by 3ft by 2ft\n- Preassembled',
      }),
      AttributeDraft.random()
        .name('search-color')
        .value([
          {
            'en-US': 'Black',
            'en-GB': 'Black',
            'de-DE': 'Schwarz',
          },
        ]),
      AttributeDraft.random()
        .name('search-finish')
        .value([
          {
            'en-US': 'Gold',
            'en-GB': 'Gold',
            'de-DE': 'Gold',
          },
        ]),
      AttributeDraft.random().name('color-label').value({
        'en-GB': 'Black',
        'de-DE': 'Schwarz',
        'en-US': 'Black',
      }),
      AttributeDraft.random().name('finish-label').value({
        'en-GB': 'Gold',
        'de-DE': 'Gold',
        'en-US': 'Gold',
      }),
      AttributeDraft.random().name('color-code').value({
        'en-US': '#000000',
        'en-GB': '#000000',
        'de-DE': '#000000',
      }),
      AttributeDraft.random().name('finish-code').value({
        'en-US': '#FFD700',
        'en-GB': '#FFD700',
        'de-DE': '#FFD700',
      }),
    ]);

export default artDecoCoffeeTable01;
