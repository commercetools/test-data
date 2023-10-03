import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const cocktailStirringSpoon01Preset =
  ProductVariantDraft.presets.sampleDataGoodStore
    .cocktailStirringSpoon01()
    .build<TProductVariantDraft>();

const skuSPOO094 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(cocktailStirringSpoon01Preset.sku!)
    .quantityOnStock(100);

export default skuSPOO094;
