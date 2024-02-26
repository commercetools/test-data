import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const bbb234Wx01 = ProductVariantDraft.presets.sampleDataB2B
  .bbb234Wx01()
  .build<TProductVariantDraft>();

const skuBBB234WXRED = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(bbb234Wx01.sku!)
    .quantityOnStock(1000);

export default skuBBB234WXRED;
