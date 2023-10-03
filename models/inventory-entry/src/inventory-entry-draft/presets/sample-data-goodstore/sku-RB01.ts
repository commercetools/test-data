import type { TInventoryEntryDraftBuilder } from '../../../types';
import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import * as InventoryEntryDraft from '../../index';

const rusticBowl01Preset = ProductVariantDraft.presets.sampleDataGoodStore
  .rusticBowl01()
  .build<TProductVariantDraft>();

const skuRB01 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(rusticBowl01Preset.sku!)
    .quantityOnStock(100);

export default skuRB01;
