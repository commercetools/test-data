import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const jj234Wx02 = ProductVariantDraft.presets.sampleDataB2B
  .jj234Wx02()
  .build<TProductVariantDraft>();

const skuJJ234WX2019 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(jj234Wx02.sku!).quantityOnStock(1000);

export default skuJJ234WX2019;
