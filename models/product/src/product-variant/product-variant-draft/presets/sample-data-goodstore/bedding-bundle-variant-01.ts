import { Money, PriceDraft } from '@commercetools-test-data/commons';
import { AttributeDraft } from '../../../../attribute';
import * as Image from '../../../../image';
import type { TProductVariantDraftBuilder } from '../../../types';
import * as ProductVariantDraft from '../../index';

const beddingBundleVariant01 = (): TProductVariantDraftBuilder =>
  ProductVariantDraft.presets
    .empty()
    .sku('DCC-03')
    .key('bed-bundle-1')
    .prices([])
    .images([])
    .attributes([AttributeDraft.random().name('product-ref').value()]);

export default beddingBundleVariant01;
