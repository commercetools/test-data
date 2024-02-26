import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const fff456St01 = ProductVariantDraft.presets.sampleDataB2B
  .fff456St01()
  .build<TProductVariantDraft>();

const skuFFF456STRED = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(fff456St01.sku!)
    .quantityOnStock(1000);

export default skuFFF456STRED;
