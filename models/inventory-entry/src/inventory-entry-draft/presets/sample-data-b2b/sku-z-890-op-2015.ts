import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const z890Op01 = ProductVariantDraft.presets.sampleDataB2B
  .z890Op01()
  .build<TProductVariantDraft>();

const skuZ890OP2015 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(z890Op01.sku!).quantityOnStock(1000);

export default skuZ890OP2015;
