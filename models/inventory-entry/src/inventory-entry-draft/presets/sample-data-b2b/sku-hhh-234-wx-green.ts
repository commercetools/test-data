import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const hhh234Wx03 = ProductVariantDraft.presets.sampleDataB2B
  .hhh234Wx03()
  .build<TProductVariantDraft>();

const skuHHH234WXGREEN = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(hhh234Wx03.sku!)
    .quantityOnStock(1000);

export default skuHHH234WXGREEN;