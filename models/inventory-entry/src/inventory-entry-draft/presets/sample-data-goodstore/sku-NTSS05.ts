
import type { TInventoryEntryDraftBuilder } from '../../../types';
import { ProductVariantDraft, type TProductVariantDraft } from '@commercetools-test-data/product';
import * as InventoryEntryDraft from '../../index';

const nalaTwoSeaterSofa05Preset = ProductVariantDraft.presets.sampleDataGoodStore.nalaTwoSeaterSofa05().build<TProductVariantDraft>();

const skuNTSS05 = (): TInventoryEntryDraftBuilder => 
    InventoryEntryDraft.presets
        .empty()
        .sku(nalaTwoSeaterSofa05Preset.sku!)
        .quantityOnStock(100);

export default skuNTSS05;

