
import type { TInventoryEntryDraftBuilder } from '../../../types';
import { ProductVariantDraft, type TProductVariantDraft } from '@commercetools-test-data/product';
import * as InventoryEntryDraft from '../../index';

const braidedRug01Preset = ProductVariantDraft.presets.sampleDataGoodStore.braidedRug01().build<TProductVariantDraft>();

const skuBR0983 = (): TInventoryEntryDraftBuilder => 
    InventoryEntryDraft.presets
        .empty()
        .sku(braidedRug01Preset.sku!)
        .quantityOnStock(99);

export default skuBR0983;

