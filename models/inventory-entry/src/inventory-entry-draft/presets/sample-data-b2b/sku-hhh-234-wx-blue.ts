import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const hhh234Wx02 = ProductVariantDraft.presets.sampleDataB2B
  .hhh234Wx02()
  .build<TProductVariantDraft>();

const skuHHH234WXBLUE = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(hhh234Wx02.sku!)
    .quantityOnStock(1000);

export default skuHHH234WXBLUE;
