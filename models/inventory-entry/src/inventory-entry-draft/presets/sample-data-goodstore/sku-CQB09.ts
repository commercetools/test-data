import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const cloudQueenBed01Preset = ProductVariantDraft.presets.sampleDataGoodStore
  .cloudQueenBed01()
  .build<TProductVariantDraft>();

const skuCQB09 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(cloudQueenBed01Preset.sku!)
    .quantityOnStock(1000);

export default skuCQB09;
