
import type { TInventoryEntryDraftBuilder } from '../../../types';
import { ProductVariantDraft, type TProductVariantDraft } from '@commercetools-test-data/product';
import * as InventoryEntryDraft from '../../index';

const ashenRug01Preset = ProductVariantDraft.presets.sampleDataGoodStore.ashenRug01().build<TProductVariantDraft>();

const skuARG56 = (): TInventoryEntryDraftBuilder => 
    InventoryEntryDraft.presets
        .empty()
        .sku(ashenRug01Preset.sku!)
        .quantityOnStock(100);

export default skuARG56;

