import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const vv234Wx02 = ProductVariantDraft.presets.sampleDataB2B
  .vv234Wx02()
  .build<TProductVariantDraft>();

const skuVV234WXBLUE = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(vv234Wx02.sku!).quantityOnStock(1000);

export default skuVV234WXBLUE;
