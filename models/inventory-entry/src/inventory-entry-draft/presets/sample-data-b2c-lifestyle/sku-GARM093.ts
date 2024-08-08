import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const glamArmchair01Preset = ProductVariantDraft.presets.sampleDataB2CLifestyle
  .glamArmchair01()
  .build<TProductVariantDraft>();

const skuGARM093 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(glamArmchair01Preset.sku!)
    .quantityOnStock(100);

export default skuGARM093;
