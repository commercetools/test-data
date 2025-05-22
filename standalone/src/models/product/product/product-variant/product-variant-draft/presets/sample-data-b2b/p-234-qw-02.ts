import { TBuilder } from '@/core';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const p234Qw02 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .sku('p234-qw-2019')
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/p234-qw-2019.webp'
        )
        .dimensions({ w: 1792, h: 1024 }),
    ])
    .attributes([
      AttributeDraft.random().name('capacity').value(600),
      AttributeDraft.random().name('model').value(2019),
      AttributeDraft.random().name('iso45001').value(true),
      AttributeDraft.random().name('mobility').value({
        key: 'marine',
        label: 'Marine',
      }),
    ]);

export default p234Qw02;
