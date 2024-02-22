import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const w789Uv01 = ProductVariantDraft.presets.sampleDataB2B
  .w789Uv01()
  .build<TProductVariantDraft>();

const skuW789UV2015 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(w789Uv01.sku!).quantityOnStock(1000);

export default skuW789UV2015;
