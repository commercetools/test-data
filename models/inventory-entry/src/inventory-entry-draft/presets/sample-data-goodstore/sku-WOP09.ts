import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const wineBottleOpener01Preset = ProductVariantDraft.presets.sampleDataGoodStore
  .wineBottleOpener01()
  .build<TProductVariantDraft>();

const skuWOP09 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(wineBottleOpener01Preset.sku!)
    .quantityOnStock(100);

export default skuWOP09;
