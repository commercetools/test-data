import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const pp234Wx01 = ProductVariantDraft.presets.sampleDataB2B
  .pp234Wx01()
  .build<TProductVariantDraft>();

const skuPP234WX2015 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(pp234Wx01.sku!).quantityOnStock(1000);

export default skuPP234WX2015;
