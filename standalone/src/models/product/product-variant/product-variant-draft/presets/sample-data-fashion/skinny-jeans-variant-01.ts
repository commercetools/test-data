import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const skinnyJeansVariant01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .sku('396594')
    .key('396594')
    .prices([
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(4999))
        .country('DE'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('USD').centAmount(4500))
        .country('US'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/skinny-QJz4Jcme.jpeg'
        )
        .dimensions({ w: 183, h: 275 }),
    ])
    .attributes([
      AttributeDraft.random().name('fit').value({
        key: 'Slim',
        label: 'Slim',
      }),
      AttributeDraft.random().name('size').value({
        key: 'Medium',
        label: 'Medium',
      }),
    ]);

export default skinnyJeansVariant01;
