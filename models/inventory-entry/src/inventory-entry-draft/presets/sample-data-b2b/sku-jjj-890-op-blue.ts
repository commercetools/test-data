import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const jjj890Op02 = ProductVariantDraft.presets.sampleDataB2B
  .jjj890Op02()
  .build<TProductVariantDraft>();

const skuJJJ890OPBLUE = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(jjj890Op02.sku!)
    .quantityOnStock(1000);

export default skuJJJ890OPBLUE;
