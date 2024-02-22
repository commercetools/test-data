import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const s567Uv03 = ProductVariantDraft.presets.sampleDataB2B
  .s567Uv03()
  .build<TProductVariantDraft>();

const skuS567UV2023 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(s567Uv03.sku!).quantityOnStock(1000);

export default skuS567UV2023;
