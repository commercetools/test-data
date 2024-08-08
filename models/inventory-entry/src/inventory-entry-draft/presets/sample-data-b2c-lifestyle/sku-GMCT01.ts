import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const modernGoldCoffeeTable01Preset =
  ProductVariantDraft.presets.sampleDataB2CLifestyle
    .modernGoldCoffeeTable01()
    .build<TProductVariantDraft>();

const skuGMCT01 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(modernGoldCoffeeTable01Preset.sku!)
    .quantityOnStock(98);

export default skuGMCT01;
