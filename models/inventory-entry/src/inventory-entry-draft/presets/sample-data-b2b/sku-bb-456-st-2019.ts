import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const bb456St02 = ProductVariantDraft.presets.sampleDataB2B
  .bb456St02()
  .build<TProductVariantDraft>();

const skuBB456ST2019 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(bb456St02.sku!).quantityOnStock(1000);

export default skuBB456ST2019;
