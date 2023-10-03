import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const travelCoffeeMug01Preset = ProductVariantDraft.presets.sampleDataGoodStore
  .travelCoffeeMug01()
  .build<TProductVariantDraft>();

const skuTCM03 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(travelCoffeeMug01Preset.sku!)
    .quantityOnStock(99);

export default skuTCM03;
