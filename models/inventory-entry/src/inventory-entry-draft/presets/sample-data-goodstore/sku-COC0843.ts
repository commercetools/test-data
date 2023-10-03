
import type { TInventoryEntryDraftBuilder } from '../../../types';
import { ProductVariantDraft, type TProductVariantDraft } from '@commercetools-test-data/product';
import * as InventoryEntryDraft from '../../index';

const cocktailShakerSet01Preset = ProductVariantDraft.presets.sampleDataGoodStore.cocktailShakerSet01().build<TProductVariantDraft>();

const skuCOC0843 = (): TInventoryEntryDraftBuilder => 
    InventoryEntryDraft.presets
        .empty()
        .sku(cocktailShakerSet01Preset.sku!)
        .quantityOnStock(100);

export default skuCOC0843;

