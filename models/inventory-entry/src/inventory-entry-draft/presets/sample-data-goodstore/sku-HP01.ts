import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const harvestPlate01Preset = ProductVariantDraft.presets.sampleDataGoodStore
  .harvestPlate01()
  .build<TProductVariantDraft>();

const skuHP01 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(harvestPlate01Preset.sku!)
    .quantityOnStock(100);

export default skuHP01;
