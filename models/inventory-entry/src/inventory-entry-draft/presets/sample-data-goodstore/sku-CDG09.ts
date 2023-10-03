import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const crystalDrinkingGlass01Preset =
  ProductVariantDraft.presets.sampleDataGoodStore
    .crystalDrinkingGlass01()
    .build<TProductVariantDraft>();

const skuCDG09 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(crystalDrinkingGlass01Preset.sku!)
    .quantityOnStock(100);

export default skuCDG09;
