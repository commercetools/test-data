import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const summerDressVariant01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .sku('791840')
    .key('791840')
    .prices([
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(7500))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(8000))
        .country('ES'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('AUD').centAmount(7000))
        .country('AU'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/dress-nsVCck7f.jpeg'
        )
        .dimensions({ w: 276, h: 298 }),
    ])
    .attributes([
      AttributeDraft.random().name('color').value({
        key: 'White',
        label: 'White',
      }),
    ]);

export default summerDressVariant01;
