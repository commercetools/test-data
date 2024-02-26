import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const jjj890Op03 = ProductVariantDraft.presets.sampleDataB2B
  .jjj890Op03()
  .build<TProductVariantDraft>();

const skuJJJ890OPGREEN = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(jjj890Op03.sku!)
    .quantityOnStock(1000);

export default skuJJJ890OPGREEN;
