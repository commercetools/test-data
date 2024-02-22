import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const aaa789Uv02 = ProductVariantDraft.presets.sampleDataB2B
  .aaa789Uv02()
  .build<TProductVariantDraft>();

const skuAAA789UVBLUE = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(aaa789Uv02.sku!)
    .quantityOnStock(1000);

export default skuAAA789UVBLUE;
