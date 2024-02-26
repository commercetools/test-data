import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const tt456St03 = ProductVariantDraft.presets.sampleDataB2B
  .tt456St03()
  .build<TProductVariantDraft>();

const skuTT456STGREEN = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(tt456St03.sku!).quantityOnStock(1000);

export default skuTT456STGREEN;
