
import type { TInventoryEntryDraftBuilder } from '../../../types';
import { ProductVariantDraft, type TProductVariantDraft } from '@commercetools-test-data/product';
import * as InventoryEntryDraft from '../../index';

const modernThreeSeaterSofa01Preset = ProductVariantDraft.presets.sampleDataGoodStore.modernThreeSeaterSofa01().build<TProductVariantDraft>();

const skuMTSS01 = (): TInventoryEntryDraftBuilder => 
    InventoryEntryDraft.presets
        .empty()
        .sku(modernThreeSeaterSofa01Preset.sku!)
        .quantityOnStock(94);

export default skuMTSS01;

