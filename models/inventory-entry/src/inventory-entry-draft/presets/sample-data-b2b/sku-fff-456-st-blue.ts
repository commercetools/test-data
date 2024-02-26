import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const fff456St02 = ProductVariantDraft.presets.sampleDataB2B
  .fff456St02()
  .build<TProductVariantDraft>();

const skuFFF456STBLUE = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(fff456St02.sku!)
    .quantityOnStock(1000);

export default skuFFF456STBLUE;
