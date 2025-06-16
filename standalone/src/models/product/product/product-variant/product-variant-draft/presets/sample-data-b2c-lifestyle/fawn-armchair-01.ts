import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const fawnArmchair01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('fawnArmchair01')
    .sku('FARM-05')
    .prices([
      PriceDraft.presets
        .empty()
        .key('59900EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(59900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('59900GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(59900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('59900USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(59900))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Fawn_Armchair-1.1.jpeg'
        )
        .dimensions({ w: 2400, h: 3200 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Leather requires special care',
        'de-DE': '- Leder erfordert besondere Pflege',
        'en-US': '- Leather requires special care',
      }),
      AttributeDraft.random().name('search-color').value('yellow'),
      AttributeDraft.random().name('search-finish').value('black'),
      AttributeDraft.random().name('color-label').value({
        'en-GB': 'Tan',
        'de-DE': 'Bräunen',
        'en-US': 'Tan',
      }),
      AttributeDraft.random().name('finish-label').value({
        'en-GB': 'Black',
        'de-DE': 'Schwarz',
        'en-US': 'Black',
      }),
      AttributeDraft.random().name('color-code').value('#D2B48C'),
      AttributeDraft.random().name('finish-code').value('#000000'),
    ]);

export default fawnArmchair01;
