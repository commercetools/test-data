import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const j234Wx02 = ProductVariantDraft.presets.sampleDataB2B
  .j234Wx02()
  .build<TProductVariantDraft>();

const skuJ234WX2019 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(j234Wx02.sku!).quantityOnStock(1000);

export default skuJ234WX2019;