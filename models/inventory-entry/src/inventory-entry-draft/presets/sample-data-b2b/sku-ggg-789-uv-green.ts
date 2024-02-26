import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const ggg789Uv03 = ProductVariantDraft.presets.sampleDataB2B
  .ggg789Uv03()
  .build<TProductVariantDraft>();

const skuGGG789UVGREEN = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(ggg789Uv03.sku!)
    .quantityOnStock(1000);

export default skuGGG789UVGREEN;
