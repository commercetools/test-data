import { MoneyDraft, PriceDraft } from '@commercetools-test-data/commons';
import { TBuilder } from '@commercetools-test-data/core';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import * as ProductVariantDraft from '../../index';

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
      AttributeDraft.random().name('color').value({
        'en-US': 'Dark Slate Gray:#2F4F4F',
        'en-GB': 'Dark Slate Grey:#2F4F4F',
        'de-DE': 'Dunkles Schiefer grau:#2F4F4F',
      }),
      AttributeDraft.random().name('finish').value({
        'en-US': 'Saddle Brown:#8b4513',
        'en-GB': 'Saddle Brown:#8b4513',
        'de-DE': 'Sattel braun:#8b4513',
      }),
      AttributeDraft.random().name('productspec').value({
        'en-US': '- Velvet upholstery\n- 3-seater sofa\n- Assembled on site',
        'en-GB': '- Velvet upholstery\n- 3-seater sofa\n- Assembled on site',
        'de-DE': '- Velvet upholstery\n- 3-seater sofa\n- Assembled on site',
      }),
    ]);

export default modernThreeSeaterSofa01;
