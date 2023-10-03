import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const opalKingBed01Preset = ProductVariantDraft.presets.sampleDataGoodStore
  .opalKingBed01()
  .build<TProductVariantDraft>();

const skuMTB023 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(opalKingBed01Preset.sku!)
    .quantityOnStock(100);

export default skuMTB023;
