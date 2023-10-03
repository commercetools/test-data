
import type { TInventoryEntryDraftBuilder } from '../../../types';
import { ProductVariantDraft, type TProductVariantDraft } from '@commercetools-test-data/product';
import * as InventoryEntryDraft from '../../index';

const sipperCoffeeMug01Preset = ProductVariantDraft.presets.sampleDataGoodStore.sipperCoffeeMug01().build<TProductVariantDraft>();

const skuSCM02 = (): TInventoryEntryDraftBuilder => 
    InventoryEntryDraft.presets
        .empty()
        .sku(sipperCoffeeMug01Preset.sku!)
        .quantityOnStock(100);

export default skuSCM02;

