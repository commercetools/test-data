import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const comfortCoffeeMug01Preset = ProductVariantDraft.presets.sampleDataGoodStore
  .comfortCoffeeMug01()
  .build<TProductVariantDraft>();

const skuCCM089 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(comfortCoffeeMug01Preset.sku!)
    .quantityOnStock(100);

export default skuCCM089;
