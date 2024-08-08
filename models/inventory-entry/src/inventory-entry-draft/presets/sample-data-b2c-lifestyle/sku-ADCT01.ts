import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const artDecoCoffeTable01Preset =
  ProductVariantDraft.presets.sampleDataB2CLifestyle
    .artDecoCoffeeTable01()
    .build<TProductVariantDraft>();

const skuADCT01 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(artDecoCoffeTable01Preset.sku!)
    .quantityOnStock(90);

export default skuADCT01;
