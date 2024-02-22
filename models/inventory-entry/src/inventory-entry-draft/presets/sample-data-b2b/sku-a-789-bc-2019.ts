import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const a789Bc02 = ProductVariantDraft.presets.sampleDataB2B
  .a789Bc02()
  .build<TProductVariantDraft>();

const skuA789BC2019 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(a789Bc02.sku!).quantityOnStock(1000);

export default skuA789BC2019;
