
import type { TInventoryEntryDraftBuilder } from '../../../types';
import { ProductVariantDraft, type TProductVariantDraft } from '@commercetools-test-data/product';
import * as InventoryEntryDraft from '../../index';

const rattanLoungeChair01Preset = ProductVariantDraft.presets.sampleDataGoodStore.rattanLoungeChair01().build<TProductVariantDraft>();

const skuRLC08 = (): TInventoryEntryDraftBuilder => 
    InventoryEntryDraft.presets
        .empty()
        .sku(rattanLoungeChair01Preset.sku!)
        .quantityOnStock(100);

export default skuRLC08;

