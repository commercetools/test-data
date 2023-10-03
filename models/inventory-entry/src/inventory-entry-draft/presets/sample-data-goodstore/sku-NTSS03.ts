
import type { TInventoryEntryDraftBuilder } from '../../../types';
import { ProductVariantDraft, type TProductVariantDraft } from '@commercetools-test-data/product';
import * as InventoryEntryDraft from '../../index';

const nalaTwoSeaterSofa03Preset = ProductVariantDraft.presets.sampleDataGoodStore.nalaTwoSeaterSofa03().build<TProductVariantDraft>();

const skuNTSS03 = (): TInventoryEntryDraftBuilder => 
    InventoryEntryDraft.presets
        .empty()
        .sku(nalaTwoSeaterSofa03Preset.sku!)
        .quantityOnStock(100);

export default skuNTSS03;

