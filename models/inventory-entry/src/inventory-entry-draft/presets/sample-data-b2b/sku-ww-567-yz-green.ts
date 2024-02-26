import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const ww567Yz03 = ProductVariantDraft.presets.sampleDataB2B
  .ww567Yz03()
  .build<TProductVariantDraft>();

const skuWW567YZGREEN = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(ww567Yz03.sku!).quantityOnStock(1000);

export default skuWW567YZGREEN;
