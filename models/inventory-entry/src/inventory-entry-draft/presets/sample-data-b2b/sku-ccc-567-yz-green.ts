import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const ccc567Yz03 = ProductVariantDraft.presets.sampleDataB2B
  .ccc567Yz03()
  .build<TProductVariantDraft>();

const skuCCC567YZGREEN = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(ccc567Yz03.sku!)
    .quantityOnStock(1000);

export default skuCCC567YZGREEN;
