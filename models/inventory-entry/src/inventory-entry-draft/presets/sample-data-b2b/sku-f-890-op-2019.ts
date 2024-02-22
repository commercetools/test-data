import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const f890Op02 = ProductVariantDraft.presets.sampleDataB2B
  .f890Op02()
  .build<TProductVariantDraft>();

const skuF890OP2019 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(f890Op02.sku!).quantityOnStock(1000);

export default skuF890OP2019;
