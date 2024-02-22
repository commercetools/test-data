import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const uu789Uv02 = ProductVariantDraft.presets.sampleDataB2B
  .uu789Uv02()
  .build<TProductVariantDraft>();

const skuUU789UVBLUE = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(uu789Uv02.sku!).quantityOnStock(1000);

export default skuUU789UVBLUE;
