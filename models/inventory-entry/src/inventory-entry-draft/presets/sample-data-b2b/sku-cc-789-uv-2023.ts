import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const cc789Uv03 = ProductVariantDraft.presets.sampleDataB2B
  .cc789Uv03()
  .build<TProductVariantDraft>();

const skuCC789UV2023 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(cc789Uv03.sku!).quantityOnStock(1000);

export default skuCC789UV2023;
