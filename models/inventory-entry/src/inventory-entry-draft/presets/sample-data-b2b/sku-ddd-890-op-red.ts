import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const ddd890Op01 = ProductVariantDraft.presets.sampleDataB2B
  .ddd890Op01()
  .build<TProductVariantDraft>();

const skuDDD890OPRED = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(ddd890Op01.sku!)
    .quantityOnStock(1000);

export default skuDDD890OPRED;
