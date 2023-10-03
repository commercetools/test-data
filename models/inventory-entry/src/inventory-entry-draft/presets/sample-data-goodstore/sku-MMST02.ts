
import type { TInventoryEntryDraftBuilder } from '../../../types';
import { ProductVariantDraft, type TProductVariantDraft } from '@commercetools-test-data/product';
import * as InventoryEntryDraft from '../../index';

const minimalistModernSideTable02Preset = ProductVariantDraft.presets.sampleDataGoodStore.minimalistModernSideTable02().build<TProductVariantDraft>();

const skuMMST02 = (): TInventoryEntryDraftBuilder => 
    InventoryEntryDraft.presets
        .empty()
        .sku(minimalistModernSideTable02Preset.sku!)
        .quantityOnStock(100);

export default skuMMST02;

