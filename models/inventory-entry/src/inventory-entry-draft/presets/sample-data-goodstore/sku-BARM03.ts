
import type { TInventoryEntryDraftBuilder } from '../../../types';
import { ProductVariantDraft, type TProductVariantDraft } from '@commercetools-test-data/product';
import * as InventoryEntryDraft from '../../index';

const brunoChair01Preset = ProductVariantDraft.presets.sampleDataGoodStore.brunoChair01().build<TProductVariantDraft>();

const skuBARM03 = (): TInventoryEntryDraftBuilder => 
    InventoryEntryDraft.presets
        .empty()
        .sku(brunoChair01Preset.sku!)
        .quantityOnStock(100);

export default skuBARM03;

