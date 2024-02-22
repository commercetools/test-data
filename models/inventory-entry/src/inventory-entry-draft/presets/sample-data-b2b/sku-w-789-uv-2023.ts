import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const w789Uv03 = ProductVariantDraft.presets.sampleDataB2B
  .w789Uv03()
  .build<TProductVariantDraft>();

const skuW789UV2023 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(w789Uv03.sku!).quantityOnStock(1000);

export default skuW789UV2023;
