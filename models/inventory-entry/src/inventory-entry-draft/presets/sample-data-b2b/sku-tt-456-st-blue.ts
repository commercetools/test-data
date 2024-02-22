import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const tt456St02 = ProductVariantDraft.presets.sampleDataB2B
  .tt456St02()
  .build<TProductVariantDraft>();

const skuTT456STBLUE = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(tt456St02.sku!).quantityOnStock(1000);

export default skuTT456STBLUE;
