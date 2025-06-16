import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const modernGlamDresser01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('modernGlamDresser01')
    .sku('MGD-01')
    .prices([
      PriceDraft.presets
        .empty()
        .key('179900EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(179900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('179900GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(179900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('179900USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(179900))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Glam_Dresser-1.1.jpeg'
        )
        .dimensions({ w: 2500, h: 2500 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Glam_Dresser-1.2.jpeg'
        )
        .dimensions({ w: 2500, h: 2500 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Glam_Dresser-1.3.jpeg'
        )
        .dimensions({ w: 5760, h: 3840 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-US':
          '- 3 large drawers\n- suede  and nickel finish on drawer handles\n- assembly on site',
        'en-GB':
          '- 3 large drawers\n- suede  and nickel finish on drawer handles\n- assembly on site',
        'de-DE':
          '- 3 large drawers\n- suede  and nickel finish on drawer handles\n- assembly on site',
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
      AttributeDraft.random().name('color-code').value('#a52a2a'),
    ]);

export default modernGlamDresser01;
