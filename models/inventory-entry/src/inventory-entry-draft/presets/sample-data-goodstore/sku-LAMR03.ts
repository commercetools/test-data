import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const leahArmchair01Preset = ProductVariantDraft.presets.sampleDataGoodStore
  .leahArmchair01()
  .build<TProductVariantDraft>();

const skuLAMR03 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(leahArmchair01Preset.sku!)
    .quantityOnStock(100);

export default skuLAMR03;
