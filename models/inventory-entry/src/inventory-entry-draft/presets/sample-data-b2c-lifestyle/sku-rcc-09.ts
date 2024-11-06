import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const variant = ProductVariantDraft.presets.sampleData
  .rusticOvenCasserole01()
  .build<TProductVariantDraft>();

const skuRcc09 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(variant.sku!).quantityOnStock(100);
export default skuRcc09;
