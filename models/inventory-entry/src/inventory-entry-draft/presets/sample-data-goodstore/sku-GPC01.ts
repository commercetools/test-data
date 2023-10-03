
import type { TInventoryEntryDraftBuilder } from '../../../types';
import { ProductVariantDraft, type TProductVariantDraft } from '@commercetools-test-data/product';
import * as InventoryEntryDraft from '../../index';

const geometricPillowCase01Preset = ProductVariantDraft.presets.sampleDataGoodStore.geometricPillowCase01().build<TProductVariantDraft>();

const skuGPC01 = (): TInventoryEntryDraftBuilder => 
    InventoryEntryDraft.presets
        .empty()
        .sku(geometricPillowCase01Preset.sku!)
        .quantityOnStock(81);

export default skuGPC01;

