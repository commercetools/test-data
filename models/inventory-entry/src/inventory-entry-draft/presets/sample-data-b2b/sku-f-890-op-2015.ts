import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const f890Op01 = ProductVariantDraft.presets.sampleDataB2B
  .f890Op01()
  .build<TProductVariantDraft>();

const skuF890OP2015 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(f890Op01.sku!).quantityOnStock(1000);

export default skuF890OP2015;
