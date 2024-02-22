import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const x456Yz03 = ProductVariantDraft.presets.sampleDataB2B
  .x456Yz03()
  .build<TProductVariantDraft>();

const skuX456YZ2023 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(x456Yz03.sku!).quantityOnStock(1000);

export default skuX456YZ2023;
