import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const x234Wx02 = ProductVariantDraft.presets.sampleDataB2B
  .x234Wx02()
  .build<TProductVariantDraft>();

const skuX234WX2019 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(x234Wx02.sku!).quantityOnStock(1000);

export default skuX234WX2019;
