import { MoneyDraft, PriceDraft } from '@commercetools-test-data/commons';
import { TBuilder } from '@commercetools-test-data/core';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import * as ProductVariantDraft from '../../index';

const charlieArmchair01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .key('charlieArmchair01')
    .sku('CARM-023')
    .prices([
      PriceDraft.presets
        .empty()
        .key('49900EUR')
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(49900))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .key('49900GBP')
        .value(MoneyDraft.random().currencyCode('GBP').centAmount(49900))
        .country('GB'),
      PriceDraft.presets
        .empty()
        .key('49900USD')
        .value(MoneyDraft.random().currencyCode('USD').centAmount(49900))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Charlie_Armchair-1.1.jpeg'
        )
        .dimensions({ w: 5500, h: 4400 }),
    ])
    .attributes([
      AttributeDraft.random().name('productspec').value({
        'en-GB': '- Dry clean only',
        'de-DE': '- Nur chemische Reinigung',
        'en-US': '- Dry clean only',
      }),
      AttributeDraft.random().name('color').value({
        'en-GB': 'Peru:#CD853F',
        'de-DE': 'Peru:#CD853F',
        'en-US': 'Peru:#CD853F',
      }),
      AttributeDraft.random().name('finish').value({
        'en-GB': 'Tan:#D2B48C',
        'de-DE': 'Bräunen:#D2B48C',
        'en-US': 'Tan:#D2B48C',
      }),
    ]);

export default charlieArmchair01;
