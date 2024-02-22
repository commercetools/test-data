import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const ddd890Op02 = ProductVariantDraft.presets.sampleDataB2B
  .ddd890Op02()
  .build<TProductVariantDraft>();

const skuDDD890OPBLUE = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(ddd890Op02.sku!)
    .quantityOnStock(1000);

export default skuDDD890OPBLUE;
