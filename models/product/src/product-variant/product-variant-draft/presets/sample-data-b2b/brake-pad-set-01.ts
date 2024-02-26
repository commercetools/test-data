import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const brakePadSet01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('brake-pad-set')
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/brake-pad-set.webp'
        )
        .dimensions({ w: 1024, h: 1024 }),
    ])
    .attributes([]);

export default brakePadSet01;
