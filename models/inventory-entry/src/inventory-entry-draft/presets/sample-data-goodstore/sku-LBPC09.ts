
import type { TInventoryEntryDraftBuilder } from '../../../types';
import { ProductVariantDraft, type TProductVariantDraft } from '@commercetools-test-data/product';
import * as InventoryEntryDraft from '../../index';

const benPillowCover01Preset = ProductVariantDraft.presets.sampleDataGoodStore.benPillowCover01().build<TProductVariantDraft>();

const skuLBPC09 = (): TInventoryEntryDraftBuilder => 
    InventoryEntryDraft.presets
        .empty()
        .sku(benPillowCover01Preset.sku!)
        .quantityOnStock(100);

export default skuLBPC09;

