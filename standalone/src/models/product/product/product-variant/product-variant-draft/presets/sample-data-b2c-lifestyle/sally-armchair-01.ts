import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const sallyArmchair01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('sallyArmchair01')
    .sku('SARMO-034')
    .prices([
      PriceDraft.presets
        .empty()
        .key('19900EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(19900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('19900GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(19900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('19900USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(19900))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Sally_Armchair-1.1.jpeg'
        )
        .dimensions({ w: 5000, h: 4000 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Comes with matching throw pillow',
        'en-US': '- Comes with matching throw pillow',
        'de-DE': '- Wird mit passendem Dekokissen geliefert',
      }),
      AttributeDraft.random().name('search-color').value('pink'),
      AttributeDraft.random().name('search-finish').value('yellow'),
      AttributeDraft.random().name('color-label').value({
        'en-GB': 'Pink',
        'de-DE': 'Rosa',
        'en-US': 'Pink',
      }),
      AttributeDraft.random().name('finish-label').value({
        'en-GB': 'Beige',
        'de-DE': 'Beige',
        'en-US': 'Beige',
      }),
      AttributeDraft.random().name('color-code').value('#FFC0CB'),
      AttributeDraft.random().name('finish-code').value('#F5F5DC'),
    ]);

export default sallyArmchair01;
