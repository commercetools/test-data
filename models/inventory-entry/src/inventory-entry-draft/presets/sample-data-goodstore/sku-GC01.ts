
import type { TInventoryEntryDraftBuilder } from '../../../types';
import { ProductVariantDraft, type TProductVariantDraft } from '@commercetools-test-data/product';
import * as InventoryEntryDraft from '../../index';

const greenServingPlate01Preset = ProductVariantDraft.presets.sampleDataGoodStore.greenServingPlate01().build<TProductVariantDraft>();

const skuGC01 = (): TInventoryEntryDraftBuilder => 
    InventoryEntryDraft.presets
        .empty()
        .sku(greenServingPlate01Preset.sku!)
        .quantityOnStock(100);

export default skuGC01;

