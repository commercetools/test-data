import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const ll890Op02 = ProductVariantDraft.presets.sampleDataB2B
  .ll890Op02()
  .build<TProductVariantDraft>();

const skuLL890OP2019 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(ll890Op02.sku!).quantityOnStock(1000);

export default skuLL890OP2019;
