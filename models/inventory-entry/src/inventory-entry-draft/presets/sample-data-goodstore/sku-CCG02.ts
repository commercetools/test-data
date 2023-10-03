
import type { TInventoryEntryDraftBuilder } from '../../../types';
import { ProductVariantDraft, type TProductVariantDraft } from '@commercetools-test-data/product';
import * as InventoryEntryDraft from '../../index';

const clinkChampagneGlass01Preset = ProductVariantDraft.presets.sampleDataGoodStore.clinkChampagneGlass01().build<TProductVariantDraft>();

const skuCCG02 = (): TInventoryEntryDraftBuilder => 
    InventoryEntryDraft.presets
        .empty()
        .sku(clinkChampagneGlass01Preset.sku!)
        .quantityOnStock(100);

export default skuCCG02;

