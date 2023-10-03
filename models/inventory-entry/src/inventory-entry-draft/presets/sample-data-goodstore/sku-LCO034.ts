import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const leatherCoaster01Preset = ProductVariantDraft.presets.sampleDataGoodStore
  .leatherCoaster01()
  .build<TProductVariantDraft>();

const skuLCO034 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(leatherCoaster01Preset.sku!)
    .quantityOnStock(1000);

export default skuLCO034;
