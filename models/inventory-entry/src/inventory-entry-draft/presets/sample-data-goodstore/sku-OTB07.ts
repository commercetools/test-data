import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const orionDoubleBed01Preset = ProductVariantDraft.presets.sampleDataGoodStore
  .orionDoubleBed01()
  .build<TProductVariantDraft>();

const skuOTB07 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(orionDoubleBed01Preset.sku!)
    .quantityOnStock(100);

export default skuOTB07;
