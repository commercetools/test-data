import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const sweatPeaCandle01Preset = ProductVariantDraft.presets.sampleDataGoodStore
  .sweetPeaCandle01()
  .build<TProductVariantDraft>();

const skuSPC01 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(sweatPeaCandle01Preset.sku!)
    .quantityOnStock(98);

export default skuSPC01;
