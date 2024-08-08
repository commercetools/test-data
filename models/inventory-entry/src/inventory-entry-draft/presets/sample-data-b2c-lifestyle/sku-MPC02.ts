import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const mayaPillowCover01Preset =
  ProductVariantDraft.presets.sampleDataB2CLifestyle
    .mayaPillowCover01()
    .build<TProductVariantDraft>();

const skuMPC02 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(mayaPillowCover01Preset.sku!)
    .quantityOnStock(100);

export default skuMPC02;
