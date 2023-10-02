
import type { TInventoryEntryDraftBuilder } from '../../../types';
import { ProductVariantDraft, type TProductVariantDraft } from '@commercetools-test-data/product';
import * as InventoryEntryDraft from '../../index';

const productPreset = ProductVariantDraft.presets.sampleDataGoodStore.canelaThreeSeaterSofa01().build<TProductVariantDraft>();

const skuCTSS098 = (): TInventoryEntryDraftBuilder => 
    InventoryEntryDraft.presets
        .empty()
        .sku(productPreset.sku!)
        .quantityOnStock(1000);

export default skuCTSS098;

