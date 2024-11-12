import { MoneyDraft, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const artDecoCoffeeTable01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
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
      AttributeDraft.random().name('color').value({
        'en-US': 'Black:#000000',
        'en-GB': 'Black:#000000',
        'de-DE': 'Schwarz:#000000',
      }),
      AttributeDraft.random().name('finish').value({
        'en-US': 'Gold:#FFD700',
        'en-GB': 'Gold:#FFD700',
        'de-DE': 'Gold:#FFD700',
      }),
    ]);

export default artDecoCoffeeTable01;
