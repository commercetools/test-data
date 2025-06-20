import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const modernThreeSeaterSofa01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('modernThreeSeaterSofa01')
    .sku('MTSS-01')
    .prices([
      PriceDraft.presets
        .empty()
        .key('249900EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(249900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('249900GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(249900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('249900USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(249900))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Three_Seater_Sofa-1.2.jpeg'
        )
        .dimensions({ w: 2500, h: 2500 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Three_Seater_Sofa-1.1.jpeg'
        )
        .dimensions({ w: 2500, h: 2500 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Three_Seater_Sofa-1.4.jpeg'
        )
        .dimensions({ w: 2500, h: 2500 }),
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Modern_Three_Seater_Sofa-1.3.jpeg'
        )
        .dimensions({ w: 5760, h: 3840 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-US': '- Velvet upholstery\n- 3-seater sofa\n- Assembled on site',
        'en-GB': '- Velvet upholstery\n- 3-seater sofa\n- Assembled on site',
        'de-DE': '- Velvet upholstery\n- 3-seater sofa\n- Assembled on site',
      }),
      AttributeDraft.random().name('search-color').value('gray'),
      AttributeDraft.random().name('search-finish').value('brown'),
      AttributeDraft.random().name('color-label').value({
        'en-GB': 'Dark Slate Grey',
        'de-DE': 'Dunkles Schiefer grau',
        'en-US': 'Dark Slate Gray',
      }),
      AttributeDraft.random().name('finish-label').value({
        'en-GB': 'Saddle Brown',
        'de-DE': 'Sattel braun',
        'en-US': 'Saddle Brown',
      }),
      AttributeDraft.random().name('color-code').value('#2F4F4F'),
      AttributeDraft.random().name('finish-code').value('#8b4513'),
    ]);

export default modernThreeSeaterSofa01;
