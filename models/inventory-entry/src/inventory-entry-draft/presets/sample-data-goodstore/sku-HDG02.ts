
import type { TInventoryEntryDraftBuilder } from '../../../types';
import { ProductVariantDraft, type TProductVariantDraft } from '@commercetools-test-data/product';
import * as InventoryEntryDraft from '../../index';

const harmonyDrinkingGlass01Preset = ProductVariantDraft.presets.sampleDataGoodStore.harmonyDrinkingGlass01().build<TProductVariantDraft>();

const skuHDG02 = (): TInventoryEntryDraftBuilder => 
    InventoryEntryDraft.presets
        .empty()
        .sku(harmonyDrinkingGlass01Preset.sku!)
        .quantityOnStock(100);

export default skuHDG02;

