import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const charlieArmchair01Preset = ProductVariantDraft.presets.sampleDataGoodStore
  .charlieArmchair01()
  .build<TProductVariantDraft>();

const skuCARM023 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(charlieArmchair01Preset.sku!)
    .quantityOnStock(100);

export default skuCARM023;
