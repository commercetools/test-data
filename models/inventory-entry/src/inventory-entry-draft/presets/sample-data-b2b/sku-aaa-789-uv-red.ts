import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const aaa789Uv01 = ProductVariantDraft.presets.sampleDataB2B
  .aaa789Uv01()
  .build<TProductVariantDraft>();

const skuAAA789UVRED = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(aaa789Uv01.sku!)
    .quantityOnStock(1000);

export default skuAAA789UVRED;
