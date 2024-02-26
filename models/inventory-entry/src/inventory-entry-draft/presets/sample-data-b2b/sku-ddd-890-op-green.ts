import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const ddd890Op03 = ProductVariantDraft.presets.sampleDataB2B
  .ddd890Op03()
  .build<TProductVariantDraft>();

const skuDDD890OPGREEN = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(ddd890Op03.sku!)
    .quantityOnStock(1000);

export default skuDDD890OPGREEN;
