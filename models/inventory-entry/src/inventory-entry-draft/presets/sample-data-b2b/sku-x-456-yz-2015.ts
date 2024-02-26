import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const x456Yz01 = ProductVariantDraft.presets.sampleDataB2B
  .x456Yz01()
  .build<TProductVariantDraft>();

const skuX456YZ2015 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(x456Yz01.sku!).quantityOnStock(1000);

export default skuX456YZ2015;
