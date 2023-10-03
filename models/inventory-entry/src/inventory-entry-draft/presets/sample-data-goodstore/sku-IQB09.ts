import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const serenityQueenBed01Preset = ProductVariantDraft.presets.sampleDataGoodStore
  .serenityQueenBed01()
  .build<TProductVariantDraft>();

const skuIQB09 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(serenityQueenBed01Preset.sku!)
    .quantityOnStock(100);

export default skuIQB09;
