import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const mm123Qr02 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('mm123-qr-2019')
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/mm123-qr-2019.webp'
        )
        .dimensions({ w: 1024, h: 1024 }),
    ])
    .attributes([
      AttributeDraft.random().name('capacity').value(600),
      AttributeDraft.random().name('model').value(2019),
      AttributeDraft.random().name('iso45001').value(false),
      AttributeDraft.random().name('mobility').value({
        key: 'tracked',
        label: 'Tracked',
      }),
    ]);

export default mm123Qr02;
