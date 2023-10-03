
import type { TInventoryEntryDraftBuilder } from '../../../types';
import { ProductVariantDraft, type TProductVariantDraft } from '@commercetools-test-data/product';
import * as InventoryEntryDraft from '../../index';

const geometricPillowCase02Preset = ProductVariantDraft.presets.sampleDataGoodStore.geometricPillowCase02().build<TProductVariantDraft>();

const skuGPC02 = (): TInventoryEntryDraftBuilder => 
    InventoryEntryDraft.presets
        .empty()
        .sku(geometricPillowCase02Preset.sku!)
        .quantityOnStock(100);

export default skuGPC02;

