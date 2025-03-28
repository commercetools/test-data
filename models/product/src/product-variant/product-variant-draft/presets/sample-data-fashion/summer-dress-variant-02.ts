import { MoneyDraft, PriceDraft } from '@commercetools-test-data/commons';
import { TBuilder } from '@commercetools-test-data/core';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import * as ProductVariantDraft from '../../index';

const summerDressVariant02 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .sku('439502')
    .key('439502')
    .prices([
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('USD').centAmount(7500))
        .country('US'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('AUD').centAmount(7500))
        .country('AU'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/pinkdress-kKvWVHgG.png'
        )
        .dimensions({ w: 199, h: 254 }),
    ])
    .attributes([
      AttributeDraft.random().name('color').value({
        key: 'Pink',
        label: 'Pink',
      }),
    ]);

export default summerDressVariant02;
