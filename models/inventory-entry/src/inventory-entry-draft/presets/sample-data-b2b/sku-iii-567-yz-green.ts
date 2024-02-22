import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const iii567Yz03 = ProductVariantDraft.presets.sampleDataB2B
  .iii567Yz03()
  .build<TProductVariantDraft>();

const skuIII567YZGREEN = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(iii567Yz03.sku!)
    .quantityOnStock(1000);

export default skuIII567YZGREEN;
