import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const ll890Op01 = ProductVariantDraft.presets.sampleDataB2B
  .ll890Op01()
  .build<TProductVariantDraft>();

const skuLL890OP2015 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(ll890Op01.sku!).quantityOnStock(1000);

export default skuLL890OP2015;
