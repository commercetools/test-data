import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const purpleMinimalistAbstractPainting01Preset =
  ProductVariantDraft.presets.sampleDataGoodStore
    .purpleMinimalistAbstractPainting01()
    .build<TProductVariantDraft>();

const skuPMAP01 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(purpleMinimalistAbstractPainting01Preset.sku!)
    .quantityOnStock(91);

export default skuPMAP01;
