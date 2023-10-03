
import type { TInventoryEntryDraftBuilder } from '../../../types';
import { ProductVariantDraft, type TProductVariantDraft } from '@commercetools-test-data/product';
import * as InventoryEntryDraft from '../../index';

const modernUpholsteredQueenBed01Preset = ProductVariantDraft.presets.sampleDataGoodStore.modernUpholsteredQueenBed01().build<TProductVariantDraft>();

const skuMUQB01 = (): TInventoryEntryDraftBuilder => 
    InventoryEntryDraft.presets
        .empty()
        .sku(modernUpholsteredQueenBed01Preset.sku!)
        .quantityOnStock(95);

export default skuMUQB01;

