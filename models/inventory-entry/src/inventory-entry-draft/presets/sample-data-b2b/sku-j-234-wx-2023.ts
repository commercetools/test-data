import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const j234Wx03 = ProductVariantDraft.presets.sampleDataB2B
  .j234Wx03()
  .build<TProductVariantDraft>();

const skuJ234WX2023 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(j234Wx03.sku!).quantityOnStock(1000);

export default skuJ234WX2023;
