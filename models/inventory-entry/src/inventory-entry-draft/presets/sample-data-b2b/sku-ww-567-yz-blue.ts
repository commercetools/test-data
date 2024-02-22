import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const ww567Yz02 = ProductVariantDraft.presets.sampleDataB2B
  .ww567Yz02()
  .build<TProductVariantDraft>();

const skuWW567YZBLUE = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(ww567Yz02.sku!).quantityOnStock(1000);

export default skuWW567YZBLUE;
