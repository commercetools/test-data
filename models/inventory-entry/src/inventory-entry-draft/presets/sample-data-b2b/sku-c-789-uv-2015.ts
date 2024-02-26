import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const c789Uv01 = ProductVariantDraft.presets.sampleDataB2B
  .c789Uv01()
  .build<TProductVariantDraft>();

const skuC789UV2015 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(c789Uv01.sku!).quantityOnStock(1000);

export default skuC789UV2015;
