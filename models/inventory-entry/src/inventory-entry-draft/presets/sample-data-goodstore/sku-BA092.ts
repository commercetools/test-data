
import type { TInventoryEntryDraftBuilder } from '../../../types';
import { ProductVariantDraft, type TProductVariantDraft } from '@commercetools-test-data/product';
import * as InventoryEntryDraft from '../../index';

const leatherWeaveChair01Preset = ProductVariantDraft.presets.sampleDataGoodStore.leatherWeaveChair01().build<TProductVariantDraft>();

const skuBA092 = (): TInventoryEntryDraftBuilder => 
    InventoryEntryDraft.presets
        .empty()
        .sku(leatherWeaveChair01Preset.sku!)
        .quantityOnStock(98);

export default skuBA092;

