import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const promDressVariant01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('711595')
    .key('711595')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('EUR').centAmount(24795))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(17500))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/floral-_WoTefrz.jpeg'
        )
        .dimensions({ w: 411, h: 420 }),
    ])
    .attributes([
      AttributeDraft.random().name('color').value({
        key: 'Floral',
        label: 'Floral',
      }),
    ]);

export default promDressVariant01;
