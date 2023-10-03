import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const ryeWhiskeyGlass01Preset = ProductVariantDraft.presets.sampleDataGoodStore
  .ryeWhiskeyGlass01()
  .build<TProductVariantDraft>();

const skuRWG09 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(ryeWhiskeyGlass01Preset.sku!)
    .quantityOnStock(100);

export default skuRWG09;
