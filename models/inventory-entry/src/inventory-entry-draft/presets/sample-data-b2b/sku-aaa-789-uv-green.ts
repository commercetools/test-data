import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const aaa789Uv03 = ProductVariantDraft.presets.sampleDataB2B
  .aaa789Uv03()
  .build<TProductVariantDraft>();

const skuAAA789UVGREEN = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(aaa789Uv03.sku!)
    .quantityOnStock(1000);

export default skuAAA789UVGREEN;
