import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const smallWoodenBowl01Preset = ProductVariantDraft.presets.sampleDataGoodStore
  .smallWoodenBowl01()
  .build<TProductVariantDraft>();

const skuSWB01 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(smallWoodenBowl01Preset.sku!)
    .quantityOnStock(100);

export default skuSWB01;
