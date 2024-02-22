import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const x234Wx03 = ProductVariantDraft.presets.sampleDataB2B
  .x234Wx03()
  .build<TProductVariantDraft>();

const skuX234WX2023 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(x234Wx03.sku!).quantityOnStock(1000);

export default skuX234WX2023;
