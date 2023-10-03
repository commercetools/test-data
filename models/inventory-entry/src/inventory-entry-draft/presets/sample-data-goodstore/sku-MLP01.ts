import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const modernLandscapePainting01Preset =
  ProductVariantDraft.presets.sampleDataGoodStore
    .modernLandscapePainting01()
    .build<TProductVariantDraft>();

const skuMLP01 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(modernLandscapePainting01Preset.sku!)
    .quantityOnStock(84);

export default skuMLP01;
