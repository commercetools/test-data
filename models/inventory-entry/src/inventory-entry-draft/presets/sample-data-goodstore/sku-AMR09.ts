import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const amaliaRug01Preset = ProductVariantDraft.presets.sampleDataGoodStore
  .amaliaRug01()
  .build<TProductVariantDraft>();

const skuAMR09 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(amaliaRug01Preset.sku!)
    .quantityOnStock(100);

export default skuAMR09;
