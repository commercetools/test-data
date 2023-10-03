
import type { TInventoryEntryDraftBuilder } from '../../../types';
import { ProductVariantDraft, type TProductVariantDraft } from '@commercetools-test-data/product';
import * as InventoryEntryDraft from '../../index';

const mayaPillowCover02Preset = ProductVariantDraft.presets.sampleDataGoodStore.mayaPillowCover02().build<TProductVariantDraft>();

const skuMPC07 = (): TInventoryEntryDraftBuilder => 
    InventoryEntryDraft.presets
        .empty()
        .sku(mayaPillowCover02Preset.sku!)
        .quantityOnStock(100);

export default skuMPC07;

