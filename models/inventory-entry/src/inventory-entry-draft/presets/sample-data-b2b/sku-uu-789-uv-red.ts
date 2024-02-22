import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const uu789Uv01 = ProductVariantDraft.presets.sampleDataB2B
  .uu789Uv01()
  .build<TProductVariantDraft>();

const skuUU789UVRED = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(uu789Uv01.sku!).quantityOnStock(1000);

export default skuUU789UVRED;
