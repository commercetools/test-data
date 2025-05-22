import { TBuilder } from '@/core';
import { MoneyDraft, PriceDraft } from '@/models/commons';
import { AttributeDraft } from '../../../../attribute';
import { ImageDraft } from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const toddlerTrousersVariant03 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .sku('855486')
    .key('855486')
    .prices([
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('USD').centAmount(2599))
        .country('US'),
      PriceDraft.presets
        .empty()
        .value(MoneyDraft.random().currencyCode('EUR').centAmount(2299))
        .country('DE'),
    ])
    .images([
      ImageDraft.presets
        .empty()
        .url(
          'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/whitepants-i2b2bEGD.gif'
        )
        .dimensions({ w: 612, h: 792 }),
    ])
    .attributes([
      AttributeDraft.random().name('size').value({
        key: 'Large',
        label: 'Large',
      }),
      AttributeDraft.random().name('fit').value({
        key: 'Straight',
        label: 'Straight',
      }),
      AttributeDraft.random().name('color').value({
        key: 'White',
        label: 'White',
      }),
      AttributeDraft.random().name('length').value({
        key: 'Ankle',
        label: 'Ankle',
      }),
    ]);

export default toddlerTrousersVariant03;
