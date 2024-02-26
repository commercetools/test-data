import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const rr890Op02 = ProductVariantDraft.presets.sampleDataB2B
  .rr890Op02()
  .build<TProductVariantDraft>();

const skuRR890OP2019 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(rr890Op02.sku!).quantityOnStock(1000);

export default skuRR890OP2019;
