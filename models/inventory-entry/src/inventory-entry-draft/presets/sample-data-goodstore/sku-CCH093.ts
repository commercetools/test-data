
import type { TInventoryEntryDraftBuilder } from '../../../types';
import { ProductVariantDraft, type TProductVariantDraft } from '@commercetools-test-data/product';
import * as InventoryEntryDraft from '../../index';

const charcoalChair01Preset = ProductVariantDraft.presets.sampleDataGoodStore.charcoalChair01().build<TProductVariantDraft>();

const skuCCH093 = (): TInventoryEntryDraftBuilder => 
    InventoryEntryDraft.presets
        .empty()
        .sku(charcoalChair01Preset.sku!)
        .quantityOnStock(100);

export default skuCCH093;

