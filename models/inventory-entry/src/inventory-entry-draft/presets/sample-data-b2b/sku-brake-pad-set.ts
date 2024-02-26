import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const brakePadSet01 = ProductVariantDraft.presets.sampleDataB2B
  .brakePadSet01()
  .build<TProductVariantDraft>();

const skuBRAKEPADSET = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(brakePadSet01.sku!)
    .quantityOnStock(1000);

export default skuBRAKEPADSET;
