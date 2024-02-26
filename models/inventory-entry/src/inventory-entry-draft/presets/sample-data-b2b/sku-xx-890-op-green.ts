import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const xx890Op03 = ProductVariantDraft.presets.sampleDataB2B
  .xx890Op03()
  .build<TProductVariantDraft>();

const skuXX890OPGREEN = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(xx890Op03.sku!).quantityOnStock(1000);

export default skuXX890OPGREEN;
