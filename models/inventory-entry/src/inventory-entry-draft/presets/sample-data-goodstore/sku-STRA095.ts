import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const cocktailStrainer01Preset = ProductVariantDraft.presets.sampleDataGoodStore
  .cocktailStrainer01()
  .build<TProductVariantDraft>();

const skuSTRA095 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(cocktailStrainer01Preset.sku!)
    .quantityOnStock(100);

export default skuSTRA095;
