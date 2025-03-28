import { MoneyDraft, PriceDraft } from '@commercetools-test-data/commons';
import { TBuilder } from '@commercetools-test-data/core';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import * as ProductVariantDraft from '../../index';

const promDressVariant02 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .sku('214452')
    .key('214452')
    .prices([
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(12500))
        .country('ES'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('AUD').centAmount(15000))
        .country('AU'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/dress2-_nh_EhPL.png'
        )
        .dimensions({ w: 1779, h: 1920 }),
    ])
    .attributes([
      AttributeDraft.random().name('color').value({
        key: 'Pink',
        label: 'Pink',
      }),
    ]);

export default promDressVariant02;
