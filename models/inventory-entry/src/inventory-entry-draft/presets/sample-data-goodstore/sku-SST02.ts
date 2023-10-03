import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const stoneServingTray01Preset = ProductVariantDraft.presets.sampleDataGoodStore
  .stoneServingTray01()
  .build<TProductVariantDraft>();

const skuSST02 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(stoneServingTray01Preset.sku!)
    .quantityOnStock(100);

export default skuSST02;
