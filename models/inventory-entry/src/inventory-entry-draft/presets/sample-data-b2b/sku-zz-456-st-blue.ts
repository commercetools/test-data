import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const zz456St02 = ProductVariantDraft.presets.sampleDataB2B
  .zz456St02()
  .build<TProductVariantDraft>();

const skuZZ456STBLUE = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(zz456St02.sku!).quantityOnStock(1000);

export default skuZZ456STBLUE;
