import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const geometricPillowCase03Preset =
  ProductVariantDraft.presets.sampleDataGoodStore
    .geometricPillowCase03()
    .build<TProductVariantDraft>();

const skuGPC03 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(geometricPillowCase03Preset.sku!)
    .quantityOnStock(100);

export default skuGPC03;
