import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const canelaThreeSeaterSofa01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('canelaThreeSeaterSofa01')
    .sku('CTSS-098')
    .prices([
      PriceDraft.presets
        .empty()
        .key('259900EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(259900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('259900GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(259900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('259900USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(259900))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Canela_Three_Seater_Sofa-1.1.jpeg'
        )
        .dimensions({ w: 5029, h: 3353 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Canela_Three_Seater_Sofa-1.2.jpeg'
        )
        .dimensions({ w: 1170, h: 780 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Leather upholstery \n- 3 seater',
        'de-DE': '- Lederpolsterung\n- 3-Sitzer',
        'en-US': '- Leather upholstery \n- 3 seater',
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
      AttributeDraft.random()
        .name('search-finish')
        .value([
          {
            'en-US': 'Yellow',
            'en-GB': 'Yellow',
            'de-DE': 'Gelb',
          },
        ]),
      AttributeDraft.random().name('color-label').value({
        'en-GB': 'Peru',
        'de-DE': 'Peru',
        'en-US': 'Peru',
      }),
      AttributeDraft.random().name('finish-label').value({
        'en-GB': 'Tan',
        'de-DE': 'Bräunen',
        'en-US': 'Tan',
      }),
      AttributeDraft.random().name('color-code').value('#CD853F'),
      AttributeDraft.random().name('finish-code').value('#D2B48C'),
    ]);

export default canelaThreeSeaterSofa01;
