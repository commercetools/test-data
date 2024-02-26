import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const cc789Uv01 = ProductVariantDraft.presets.sampleDataB2B
  .cc789Uv01()
  .build<TProductVariantDraft>();

const skuCC789UV2015 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(cc789Uv01.sku!).quantityOnStock(1000);

export default skuCC789UV2015;
