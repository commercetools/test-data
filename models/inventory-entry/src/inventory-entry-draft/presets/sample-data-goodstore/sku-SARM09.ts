
import type { TInventoryEntryDraftBuilder } from '../../../types';
import { ProductVariantDraft, type TProductVariantDraft } from '@commercetools-test-data/product';
import * as InventoryEntryDraft from '../../index';

const slateArmchair01Preset = ProductVariantDraft.presets.sampleDataGoodStore.slateArmchair01().build<TProductVariantDraft>();

const skuSARM09 = (): TInventoryEntryDraftBuilder => 
    InventoryEntryDraft.presets
        .empty()
        .sku(slateArmchair01Preset.sku!)
        .quantityOnStock(100);

export default skuSARM09;

