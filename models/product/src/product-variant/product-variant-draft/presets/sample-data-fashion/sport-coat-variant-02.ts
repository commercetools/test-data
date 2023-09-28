import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const sportCoatVariant02 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('692458')
    .key('692458')
    .prices([
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('AUD').centAmount(20000))
        .country('AU'),
      PriceDraft.presets
        .empty()
        .value(Money.random().currencyCode('USD').centAmount(15000))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/coat-Keqv_ZSU.jpeg'
        )
        .dimensions({ w: 150, h: 150 }),
    ])
    .attributes([
      AttributeDraft.random().name('sleeve_length').value({
        key: 'Normal',
        label: 'Normal',
      }),
    ]);

export default sportCoatVariant02;
