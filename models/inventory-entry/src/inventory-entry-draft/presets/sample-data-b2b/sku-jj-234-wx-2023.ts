import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const jj234Wx03 = ProductVariantDraft.presets.sampleDataB2B
  .jj234Wx03()
  .build<TProductVariantDraft>();

const skuJJ234WX2023 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(jj234Wx03.sku!).quantityOnStock(1000);

export default skuJJ234WX2023;
