import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const modernUpholsteredTwinBed01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('modernUpholsteredTwinBed01')
    .sku('MUTB-01')
    .prices([
      PriceDraft.presets
        .empty()
        .key('45000EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(45000))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('45000GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(45000))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('45000USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(45000))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Upholstered_Twin_Bed-1.1.jpeg'
        )
        .dimensions({ w: 3000, h: 3000 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Upholstered_Twin_Bed-1.2.jpeg'
        )
        .dimensions({ w: 3000, h: 3000 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Upholstered_Twin_Bed-1.3.jpeg'
        )
        .dimensions({ w: 3000, h: 3000 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-US':
          '- Cotton upholstery \n- Manufactured wood\n- Twin size\n- Assembled on site',
        'en-GB':
          '- Cotton upholstery \n- Manufactured wood\n- Twin size\n- Assembled on site',
        'de-DE':
          '- Cotton upholstery \n- Manufactured wood\n- Twin size\n- Assembled on site',
      }),
      AttributeDraft.random()
        .name('search-color')
        .value([
          {
            'en-US': 'White',
            'en-GB': 'White',
            'de-DE': 'Weiß',
          },
        ]),
      AttributeDraft.random()
        .name('search-finish')
        .value([
          {
            'en-US': 'Gray',
            'en-GB': 'Grey',
            'de-DE': 'Grau',
          },
        ]),
      AttributeDraft.random().name('color-label').value({
        'en-GB': 'White',
        'de-DE': 'Weiß',
        'en-US': 'White',
      }),
      AttributeDraft.random().name('finish-label').value({
        'en-GB': 'Lightslate Grey',
        'de-DE': 'Helles Schiefer grau',
        'en-US': 'Lightslate Gray',
      }),
      AttributeDraft.random().name('color-code').value('#FFFFFF'),
      AttributeDraft.random().name('finish-code').value('#778899'),
    ]);

export default modernUpholsteredTwinBed01;
