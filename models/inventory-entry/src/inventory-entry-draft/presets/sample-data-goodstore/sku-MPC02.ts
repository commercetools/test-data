
import type { TInventoryEntryDraftBuilder } from '../../../types';
import { ProductVariantDraft, type TProductVariantDraft } from '@commercetools-test-data/product';
import * as InventoryEntryDraft from '../../index';

const mayaPillowCover01Preset = ProductVariantDraft.presets.sampleDataGoodStore.mayaPillowCover01().build<TProductVariantDraft>();

const skuMPC02 = (): TInventoryEntryDraftBuilder => 
    InventoryEntryDraft.presets
        .empty()
        .sku(mayaPillowCover01Preset.sku!)
        .quantityOnStock(100);

export default skuMPC02;

