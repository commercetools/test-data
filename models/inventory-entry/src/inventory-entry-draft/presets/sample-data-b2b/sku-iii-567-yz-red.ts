import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const iii567Yz01 = ProductVariantDraft.presets.sampleDataB2B
  .iii567Yz01()
  .build<TProductVariantDraft>();

const skuIII567YZRED = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(iii567Yz01.sku!)
    .quantityOnStock(1000);

export default skuIII567YZRED;
