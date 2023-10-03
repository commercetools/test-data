
import type { TInventoryEntryDraftBuilder } from '../../../types';
import { ProductVariantDraft, type TProductVariantDraft } from '@commercetools-test-data/product';
import * as InventoryEntryDraft from '../../index';

const classicBeerMug01Preset = ProductVariantDraft.presets.sampleDataGoodStore.classicBeerMug01().build<TProductVariantDraft>();

const skuCBM03 = (): TInventoryEntryDraftBuilder => 
    InventoryEntryDraft.presets
        .empty()
        .sku(classicBeerMug01Preset.sku!)
        .quantityOnStock(100);

export default skuCBM03;

