import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const bbb234Wx02 = ProductVariantDraft.presets.sampleDataB2B
  .bbb234Wx02()
  .build<TProductVariantDraft>();

const skuBBB234WXBLUE = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(bbb234Wx02.sku!)
    .quantityOnStock(1000);

export default skuBBB234WXBLUE;
