import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const rusticOvenCasserole01Preset =
  ProductVariantDraft.presets.sampleDataGoodStore
    .rusticOvenCasserole01()
    .build<TProductVariantDraft>();

const skuRCC09 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(rusticOvenCasserole01Preset.sku!)
    .quantityOnStock(100);

export default skuRCC09;
