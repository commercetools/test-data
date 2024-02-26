import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const tt456St01 = ProductVariantDraft.presets.sampleDataB2B
  .tt456St01()
  .build<TProductVariantDraft>();

const skuTT456STRED = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(tt456St01.sku!).quantityOnStock(1000);

export default skuTT456STRED;
