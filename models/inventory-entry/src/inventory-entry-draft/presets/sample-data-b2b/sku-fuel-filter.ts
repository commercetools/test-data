import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const fuelFilter01 = ProductVariantDraft.presets.sampleDataB2B
  .fuelFilter01()
  .build<TProductVariantDraft>();

const skuFUELFILTER = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(fuelFilter01.sku!)
    .quantityOnStock(1000);

export default skuFUELFILTER;
