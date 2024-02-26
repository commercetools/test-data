import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const w789Uv02 = ProductVariantDraft.presets.sampleDataB2B
  .w789Uv02()
  .build<TProductVariantDraft>();

const skuW789UV2019 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(w789Uv02.sku!).quantityOnStock(1000);

export default skuW789UV2019;
