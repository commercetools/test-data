import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const ll890Op03 = ProductVariantDraft.presets.sampleDataB2B
  .ll890Op03()
  .build<TProductVariantDraft>();

const skuLL890OP2023 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(ll890Op03.sku!).quantityOnStock(1000);

export default skuLL890OP2023;
