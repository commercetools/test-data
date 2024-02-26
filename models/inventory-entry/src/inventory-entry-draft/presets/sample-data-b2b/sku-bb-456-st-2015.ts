import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const bb456St01 = ProductVariantDraft.presets.sampleDataB2B
  .bb456St01()
  .build<TProductVariantDraft>();

const skuBB456ST2015 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(bb456St01.sku!).quantityOnStock(1000);

export default skuBB456ST2015;
