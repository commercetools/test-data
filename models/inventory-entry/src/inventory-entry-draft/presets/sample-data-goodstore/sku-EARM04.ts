import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const edgarArmchair01Preset = ProductVariantDraft.presets.sampleDataGoodStore
  .edgarArmchair01()
  .build<TProductVariantDraft>();

const skuEARM04 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(edgarArmchair01Preset.sku!)
    .quantityOnStock(1000);

export default skuEARM04;
