import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const modernGoldCoffeeTable01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('modernGoldCoffeeTable01')
    .sku('GMCT-01')
    .prices([
      PriceDraft.presets
        .empty()
        .key('25999EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(25999))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('25999GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(25999))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('25999USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(25999))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Gold_Coffee_Table-1.2.jpeg'
        )
        .dimensions({ w: 2500, h: 2500 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Gold_Coffee_Table-1.3.jpeg'
        )
        .dimensions({ w: 2500, h: 2500 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Gold_Coffee_Table-1.1.jpeg'
        )
        .dimensions({ w: 2500, h: 2500 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Gold_Coffee_Table-1.4.jpeg'
        )
        .dimensions({ w: 2500, h: 2500 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-US':
          '- Length: 5 feet\n- Width: 3 feet\n- Height: 2 feet\n- Tables made of plastic laminate on manufactured wood\n- Gold finish on legs\n- Preassembled',
        'en-GB':
          '- Length: 5 feet\n- Width: 3 feet\n- Height: 2 feet\n- Tables made of plastic laminate on manufactured wood\n- Gold finish on legs\n- Preassembled',
        'de-DE':
          '- Length: 5 feet\n- Width: 3 feet\n- Height: 2 feet\n- Tables made of plastic laminate on manufactured wood\n- Gold finish on legs\n- Preassembled',
      }),
      AttributeDraft.random().name('search-color').value('white'),
      AttributeDraft.random().name('search-finish').value('gold'),
      AttributeDraft.random().name('color-label').value({
        'en-GB': 'White',
        'de-DE': 'Weiß',
        'en-US': 'White',
      }),
      AttributeDraft.random().name('finish-label').value({
        'en-GB': 'Gold',
        'de-DE': 'Gold',
        'en-US': 'Gold',
      }),
      AttributeDraft.random().name('color-code').value('#FFFFFF'),
      AttributeDraft.random().name('finish-code').value('#FFD700'),
    ]);

export default modernGoldCoffeeTable01;
