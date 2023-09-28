import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const beddingBundle01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('DCC-03')
    .key('bed-bundle-1')
    .prices([])
    .images([])
    .attributes([
      AttributeDraft.random()
        .name('product-ref')
        .value([
          { typeId: 'product', id: '98654f5c-de8e-463c-903d-3c2f0c8176bc' },
          { typeId: 'product', id: '0e56cf64-fa51-44e2-969a-3b3d6cd5bab3' },
        ]),
    ]);

export default beddingBundle01;
