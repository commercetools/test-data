import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const marquisTray01Preset = ProductVariantDraft.presets.sampleDataGoodStore
  .marquisTray01()
  .build<TProductVariantDraft>();

const skuMWT01 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(marquisTray01Preset.sku!)
    .quantityOnStock(100);

export default skuMWT01;
