import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const vv234Wx03 = ProductVariantDraft.presets.sampleDataB2B
  .vv234Wx03()
  .build<TProductVariantDraft>();

const skuVV234WXGREEN = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(vv234Wx03.sku!).quantityOnStock(1000);

export default skuVV234WXGREEN;
