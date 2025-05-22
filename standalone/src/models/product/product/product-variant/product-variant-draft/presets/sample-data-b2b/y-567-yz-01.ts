import { TBuilder } from '@/core';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const y567Yz01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .sku('y567-yz-2015')
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/y567-yz-2015.webp'
        )
        .dimensions({ w: 1792, h: 1024 }),
    ])
    .attributes([
      AttributeDraft.random().name('capacity').value(450),
      AttributeDraft.random().name('model').value(2015),
      AttributeDraft.random().name('iso45001').value(false),
      AttributeDraft.random().name('mobility').value({
        key: 'wheeled',
        label: 'Wheeled',
      }),
    ]);

export default y567Yz01;
