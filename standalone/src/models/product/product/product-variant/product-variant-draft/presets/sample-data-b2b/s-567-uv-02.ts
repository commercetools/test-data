import { TBuilder } from '@/core';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const s567Uv02 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .sku('s567-uv-2019')
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/s567-uv-2019.webp'
        )
        .dimensions({ w: 1792, h: 1024 }),
    ])
    .attributes([
      AttributeDraft.random().name('capacity').value(700),
      AttributeDraft.random().name('model').value(2019),
      AttributeDraft.random().name('iso45001').value(false),
      AttributeDraft.random().name('mobility').value({
        key: 'marine',
        label: 'Marine',
      }),
    ]);

export default s567Uv02;
