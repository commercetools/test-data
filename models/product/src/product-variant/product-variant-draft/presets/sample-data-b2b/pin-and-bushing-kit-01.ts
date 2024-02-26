import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const pinAndBushingKit01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('pin-and-bushing-kit')
    .images([
      Image.ImageDraft.presets
        .empty()
        .url(
          'https://storage.googleapis.com/merchant-center-europe/sample-data/b2bstore/pin-and-bushing-kit.webp'
        )
        .dimensions({ w: 1024, h: 1024 }),
    ])
    .attributes([]);

export default pinAndBushingKit01;
