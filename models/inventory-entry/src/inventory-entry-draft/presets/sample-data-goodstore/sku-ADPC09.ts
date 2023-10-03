import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const patternedPillowCover01Preset =
  ProductVariantDraft.presets.sampleDataGoodStore
    .patternedPillowCover01()
    .build<TProductVariantDraft>();

const skuADPC09 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(patternedPillowCover01Preset.sku!)
    .quantityOnStock(100);

export default skuADPC09;
