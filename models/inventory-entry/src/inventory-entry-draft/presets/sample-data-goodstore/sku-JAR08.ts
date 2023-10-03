
import type { TInventoryEntryDraftBuilder } from '../../../types';
import { ProductVariantDraft, type TProductVariantDraft } from '@commercetools-test-data/product';
import * as InventoryEntryDraft from '../../index';

const juteRug01Preset = ProductVariantDraft.presets.sampleDataGoodStore.juteRug01().build<TProductVariantDraft>();

const skuJAR08 = (): TInventoryEntryDraftBuilder => 
    InventoryEntryDraft.presets
        .empty()
        .sku(juteRug01Preset.sku!)
        .quantityOnStock(100);

export default skuJAR08;

