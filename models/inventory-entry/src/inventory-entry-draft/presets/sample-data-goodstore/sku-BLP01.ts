import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const purpleLandscapePainting01Preset =
  ProductVariantDraft.presets.sampleDataGoodStore
    .purpleLandscapePainting01()
    .build<TProductVariantDraft>();

const skuBLP01 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(purpleLandscapePainting01Preset.sku!)
    .quantityOnStock(80);

export default skuBLP01;
