import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const ccc567Yz01 = ProductVariantDraft.presets.sampleDataB2B
  .ccc567Yz01()
  .build<TProductVariantDraft>();

const skuCCC567YZRED = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(ccc567Yz01.sku!)
    .quantityOnStock(1000);

export default skuCCC567YZRED;