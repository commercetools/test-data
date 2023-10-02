
import type { TInventoryEntryDraftBuilder } from '../../../types';
import { ProductVariantDraft, type TProductVariantDraft } from '@commercetools-test-data/product';
import * as InventoryEntryDraft from '../../index';

const productPreset = ProductVariantDraft.presets.sampleDataGoodStore.teakServingPlatter01().build<TProductVariantDraft>();

const skuTST02 = (): TInventoryEntryDraftBuilder => 
    InventoryEntryDraft.presets
        .empty()
        .sku(productPreset.sku!)
        .quantityOnStock(100);

export default skuTST02;

