import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const meadowRug03Preset = ProductVariantDraft.presets.sampleDataGoodStore
  .meadowRug03()
  .build<TProductVariantDraft>();

const skuMR05 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(meadowRug03Preset.sku!)
    .quantityOnStock(100);

export default skuMR05;
