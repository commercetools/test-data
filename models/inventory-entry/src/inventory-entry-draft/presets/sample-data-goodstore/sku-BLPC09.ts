
import type { TInventoryEntryDraftBuilder } from '../../../types';
import { ProductVariantDraft, type TProductVariantDraft } from '@commercetools-test-data/product';
import * as InventoryEntryDraft from '../../index';

const cocoaPillowCover01Preset = ProductVariantDraft.presets.sampleDataGoodStore.cocoaPillowCover01().build<TProductVariantDraft>();

const skuBLPC09 = (): TInventoryEntryDraftBuilder => 
    InventoryEntryDraft.presets
        .empty()
        .sku(cocoaPillowCover01Preset.sku!)
        .quantityOnStock(100);

export default skuBLPC09;

