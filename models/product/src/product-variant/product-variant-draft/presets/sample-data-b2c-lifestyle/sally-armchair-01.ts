import { MoneyDraft, PriceDraft } from '@commercetools-test-data/commons';
import { TBuilder } from '@commercetools-test-data/core';
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
      AttributeDraft.random().name('color').value({
        'en-GB': 'Pink:#FFC0CB',
        'de-DE': 'Rosa:#FFC0CB',
        'en-US': 'Pink:#FFC0CB',
      }),
      AttributeDraft.random().name('finish').value({
        'en-GB': 'Beige:#F5F5DC',
        'en-US': 'Beige:#F5F5DC',
        'de-DE': 'Beige:#F5F5DC',
      }),
    ]);

export default sallyArmchair01;
