import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const uu789Uv03 = ProductVariantDraft.presets.sampleDataB2B
  .uu789Uv03()
  .build<TProductVariantDraft>();

const skuUU789UVGREEN = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(uu789Uv03.sku!).quantityOnStock(1000);

export default skuUU789UVGREEN;
