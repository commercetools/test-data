
import type { TInventoryEntryDraftBuilder } from '../../../types';
import { ProductVariantDraft, type TProductVariantDraft } from '@commercetools-test-data/product';
import * as InventoryEntryDraft from '../../index';

const modernCeramicPlate01Preset = ProductVariantDraft.presets.sampleDataGoodStore.modernCeramicPlate01().build<TProductVariantDraft>();

const skuMCP01 = (): TInventoryEntryDraftBuilder => 
    InventoryEntryDraft.presets
        .empty()
        .sku(modernCeramicPlate01Preset.sku!)
        .quantityOnStock(100);

export default skuMCP01;

