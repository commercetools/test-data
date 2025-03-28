import { MoneyDraft, PriceDraft } from '@commercetools-test-data/commons';
import { TBuilder } from '@commercetools-test-data/core';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import * as ProductVariantDraft from '../../index';

const necklaceVariant02 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .sku('42610')
    .key('42610')
    .prices([
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('AUD').centAmount(1575))
        .country('AU'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/necklace-KmP7rQDP.png'
        )
        .dimensions({ w: 209, h: 241 }),
    ])
    .attributes([
      AttributeDraft.random().name('type').value({
        key: 'Jewelry',
        label: 'Jewelry',
      }),
    ]);

export default necklaceVariant02;
