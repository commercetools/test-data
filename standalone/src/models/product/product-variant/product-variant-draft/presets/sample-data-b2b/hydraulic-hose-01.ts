import { TBuilder } from '@/core';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraft } from '../../../types';
import { ProductVariantDraft } from '../../index';

const hydraulicHose01 = (): TBuilder<TProductVariantDraft> =>
  ProductVariantDraft.presets
    .empty()
    .sku('hydraulic-hose')
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/hydraulic-hose.webp'
        )
        .dimensions({ w: 1024, h: 1024 }),
    ])
    .attributes([]);

export default hydraulicHose01;
