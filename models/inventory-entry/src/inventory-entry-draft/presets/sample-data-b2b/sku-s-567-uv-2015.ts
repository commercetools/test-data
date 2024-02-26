import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const s567Uv01 = ProductVariantDraft.presets.sampleDataB2B
  .s567Uv01()
  .build<TProductVariantDraft>();

const skuS567UV2015 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(s567Uv01.sku!).quantityOnStock(1000);

export default skuS567UV2015;
