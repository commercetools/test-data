import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const fff456St03 = ProductVariantDraft.presets.sampleDataB2B
  .fff456St03()
  .build<TProductVariantDraft>();

const skuFFF456STGREEN = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(fff456St03.sku!)
    .quantityOnStock(1000);

export default skuFFF456STGREEN;
