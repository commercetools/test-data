import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const iceBucket01Preset = ProductVariantDraft.presets.sampleDataGoodStore
  .iceBucket01()
  .build<TProductVariantDraft>();

const skuBUCK023 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(iceBucket01Preset.sku!)
    .quantityOnStock(100);

export default skuBUCK023;
