import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const jj234Wx01 = ProductVariantDraft.presets.sampleDataB2B
  .jj234Wx01()
  .build<TProductVariantDraft>();

const skuJJ234WX2015 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(jj234Wx01.sku!).quantityOnStock(1000);

export default skuJJ234WX2015;
