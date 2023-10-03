
import type { TInventoryEntryDraftBuilder } from '../../../types';
import { ProductVariantDraft, type TProductVariantDraft } from '@commercetools-test-data/product';
import * as InventoryEntryDraft from '../../index';

const ecruDoubleBed01Preset = ProductVariantDraft.presets.sampleDataGoodStore.ecruDoubleBed01().build<TProductVariantDraft>();

const skuSQB034 = (): TInventoryEntryDraftBuilder => 
    InventoryEntryDraft.presets
        .empty()
        .sku(ecruDoubleBed01Preset.sku!)
        .quantityOnStock(100);

export default skuSQB034;

