import { AttributeDraft } from '../../../../attribute';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const beddingBundle01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('DCC-03')
    .key('bed-bundle-1')
    .prices([])
    .images([])
    .attributes([AttributeDraft.random().name('product-ref').value(null)]);

export default beddingBundle01;
