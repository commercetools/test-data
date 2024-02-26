import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const bbb234Wx03 = ProductVariantDraft.presets.sampleDataB2B
  .bbb234Wx03()
  .build<TProductVariantDraft>();

const skuBBB234WXGREEN = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(bbb234Wx03.sku!)
    .quantityOnStock(1000);

export default skuBBB234WXGREEN;
