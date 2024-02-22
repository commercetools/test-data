import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const rr890Op03 = ProductVariantDraft.presets.sampleDataB2B
  .rr890Op03()
  .build<TProductVariantDraft>();

const skuRR890OP2023 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(rr890Op03.sku!).quantityOnStock(1000);

export default skuRR890OP2023;
