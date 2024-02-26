import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const z890Op03 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('z890-op-2023')
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/z890-op-2023.webp'
        )
        .dimensions({ w: 1792, h: 1024 }),
    ])
    .attributes([
      AttributeDraft.random().name('capacity').value(500),
      AttributeDraft.random().name('model').value(2023),
      AttributeDraft.random().name('iso45001').value(true),
      AttributeDraft.random().name('mobility').value({
        key: 'tracked',
        label: 'Tracked',
      }),
    ]);

export default z890Op03;
