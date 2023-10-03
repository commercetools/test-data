
import type { TInventoryEntryDraftBuilder } from '../../../types';
import { ProductVariantDraft, type TProductVariantDraft } from '@commercetools-test-data/product';
import * as InventoryEntryDraft from '../../index';

const naturaRug01Preset = ProductVariantDraft.presets.sampleDataGoodStore.naturaRug01().build<TProductVariantDraft>();

const skuNR09 = (): TInventoryEntryDraftBuilder => 
    InventoryEntryDraft.presets
        .empty()
        .sku(naturaRug01Preset.sku!)
        .quantityOnStock(100);

export default skuNR09;

