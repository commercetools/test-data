import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const iii567Yz02 = ProductVariantDraft.presets.sampleDataB2B
  .iii567Yz02()
  .build<TProductVariantDraft>();

const skuIII567YZBLUE = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(iii567Yz02.sku!)
    .quantityOnStock(1000);

export default skuIII567YZBLUE;
