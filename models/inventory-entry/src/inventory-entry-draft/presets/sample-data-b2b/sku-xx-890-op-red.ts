import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const xx890Op01 = ProductVariantDraft.presets.sampleDataB2B
  .xx890Op01()
  .build<TProductVariantDraft>();

const skuXX890OPRED = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(xx890Op01.sku!).quantityOnStock(1000);

export default skuXX890OPRED;
