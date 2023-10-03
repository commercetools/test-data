
import type { TInventoryEntryDraftBuilder } from '../../../types';
import { ProductVariantDraft, type TProductVariantDraft } from '@commercetools-test-data/product';
import * as InventoryEntryDraft from '../../index';

const nalaTwoSeaterSofa07Preset = ProductVariantDraft.presets.sampleDataGoodStore.nalaTwoSeaterSofa07().build<TProductVariantDraft>();

const skuNTSS07 = (): TInventoryEntryDraftBuilder => 
    InventoryEntryDraft.presets
        .empty()
        .sku(nalaTwoSeaterSofa07Preset.sku!)
        .quantityOnStock(100);

export default skuNTSS07;

