import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const pp234Wx03 = ProductVariantDraft.presets.sampleDataB2B
  .pp234Wx03()
  .build<TProductVariantDraft>();

const skuPP234WX2023 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(pp234Wx03.sku!).quantityOnStock(1000);

export default skuPP234WX2023;
