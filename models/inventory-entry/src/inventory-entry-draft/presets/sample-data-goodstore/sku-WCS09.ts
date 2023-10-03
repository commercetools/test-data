import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const walnutCabinet01Preset = ProductVariantDraft.presets.sampleDataGoodStore
  .walnutCabinet01()
  .build<TProductVariantDraft>();

const skuWCS09 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(walnutCabinet01Preset.sku!)
    .quantityOnStock(100);

export default skuWCS09;
