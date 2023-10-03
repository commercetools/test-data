
import type { TInventoryEntryDraftBuilder } from '../../../types';
import { ProductVariantDraft, type TProductVariantDraft } from '@commercetools-test-data/product';
import * as InventoryEntryDraft from '../../index';

const emeraldVelvetChair01Preset = ProductVariantDraft.presets.sampleDataGoodStore.emeraldVelvetChair01().build<TProductVariantDraft>();

const skuVARM09 = (): TInventoryEntryDraftBuilder => 
    InventoryEntryDraft.presets
        .empty()
        .sku(emeraldVelvetChair01Preset.sku!)
        .quantityOnStock(1000);

export default skuVARM09;

