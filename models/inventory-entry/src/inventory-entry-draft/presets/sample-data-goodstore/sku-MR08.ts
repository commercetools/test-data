import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const meadowRug02Preset = ProductVariantDraft.presets.sampleDataGoodStore
  .meadowRug02()
  .build<TProductVariantDraft>();

const skuMR08 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(meadowRug02Preset.sku!)
    .quantityOnStock(100);

export default skuMR08;
