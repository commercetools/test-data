import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const i789Uv01 = ProductVariantDraft.presets.sampleDataB2B
  .i789Uv01()
  .build<TProductVariantDraft>();

const skuI789UV2015 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(i789Uv01.sku!).quantityOnStock(1000);

export default skuI789UV2015;
