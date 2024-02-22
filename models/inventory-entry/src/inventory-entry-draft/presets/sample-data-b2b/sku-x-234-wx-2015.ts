import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const x234Wx01 = ProductVariantDraft.presets.sampleDataB2B
  .x234Wx01()
  .build<TProductVariantDraft>();

const skuX234WX2015 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(x234Wx01.sku!).quantityOnStock(1000);

export default skuX234WX2015;
