import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const ivoryPlate01Preset = ProductVariantDraft.presets.sampleDataB2CLifestyle
  .ivoryPlate01()
  .build<TProductVariantDraft>();

const skuISP01 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(ivoryPlate01Preset.sku!)
    .quantityOnStock(100);

export default skuISP01;