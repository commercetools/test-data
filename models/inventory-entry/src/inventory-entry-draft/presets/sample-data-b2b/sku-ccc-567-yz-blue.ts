import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const ccc567Yz02 = ProductVariantDraft.presets.sampleDataB2B
  .ccc567Yz02()
  .build<TProductVariantDraft>();

const skuCCC567YZBLUE = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(ccc567Yz02.sku!)
    .quantityOnStock(1000);

export default skuCCC567YZBLUE;
