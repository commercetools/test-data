import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const ww567Yz01 = ProductVariantDraft.presets.sampleDataB2B
  .ww567Yz01()
  .build<TProductVariantDraft>();

const skuWW567YZRED = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(ww567Yz01.sku!).quantityOnStock(1000);

export default skuWW567YZRED;
