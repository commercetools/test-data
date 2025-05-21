import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const classicCoffeeCup01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('classicCoffeeCup01')
    .sku('CCC-09')
    .prices([
      PriceDraft.presets
        .empty()
        .key('6999EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(6999))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('6999GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(6999))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('6999USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(6999))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Classic_Coffee_Cup-1.1.jpeg'
        )
        .dimensions({ w: 6000, h: 4000 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Classic_Coffee_Cup-1.2.jpeg'
        )
        .dimensions({ w: 4153, h: 3840 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB':
          '- Includes a matching saucer\n- Set includes 4 cups and saucers',
        'de-DE':
          '- Inklusive passender Untertasse\n- Das Set enthält 4 Tassen und Untertassen',
        'en-US':
          '- Includes a matching saucer\n- Set includes 4 cups and saucers',
      }),
      AttributeDraft.random().name('color').value({
        'en-GB': 'White:#FFFFFF',
        'de-DE': 'Weiß:#FFFFFF',
        'en-US': 'White:#FFFFFF',
      }),
    ]);

export default classicCoffeeCup01;
