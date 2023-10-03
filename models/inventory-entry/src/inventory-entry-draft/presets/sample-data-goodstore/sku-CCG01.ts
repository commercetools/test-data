
import type { TInventoryEntryDraftBuilder } from '../../../types';
import { ProductVariantDraft, type TProductVariantDraft } from '@commercetools-test-data/product';
import * as InventoryEntryDraft from '../../index';

const classicChampagneGlasses01Preset = ProductVariantDraft.presets.sampleDataGoodStore.classicChampagneGlasses01().build<TProductVariantDraft>();

const skuCCG01 = (): TInventoryEntryDraftBuilder => 
    InventoryEntryDraft.presets
        .empty()
        .sku(classicChampagneGlasses01Preset.sku!)
        .quantityOnStock(99);

export default skuCCG01;

