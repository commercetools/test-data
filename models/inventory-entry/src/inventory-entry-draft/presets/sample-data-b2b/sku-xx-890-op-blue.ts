import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const xx890Op02 = ProductVariantDraft.presets.sampleDataB2B
  .xx890Op02()
  .build<TProductVariantDraft>();

const skuXX890OPBLUE = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(xx890Op02.sku!).quantityOnStock(1000);

export default skuXX890OPBLUE;
