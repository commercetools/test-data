
import type { TInventoryEntryDraftBuilder } from '../../../types';
import { ProductVariantDraft, type TProductVariantDraft } from '@commercetools-test-data/product';
import * as InventoryEntryDraft from '../../index';

const tanQueenBed01Preset = ProductVariantDraft.presets.sampleDataGoodStore.tanQueenBed01().build<TProductVariantDraft>();

const skuLPQB084 = (): TInventoryEntryDraftBuilder => 
    InventoryEntryDraft.presets
        .empty()
        .sku(tanQueenBed01Preset.sku!)
        .quantityOnStock(100);

export default skuLPQB084;

