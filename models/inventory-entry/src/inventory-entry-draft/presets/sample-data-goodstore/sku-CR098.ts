import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const cobblestoneRug01Preset = ProductVariantDraft.presets.sampleDataGoodStore
  .cobblestoneRug01()
  .build<TProductVariantDraft>();

const skuCR098 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(cobblestoneRug01Preset.sku!)
    .quantityOnStock(100);

export default skuCR098;
