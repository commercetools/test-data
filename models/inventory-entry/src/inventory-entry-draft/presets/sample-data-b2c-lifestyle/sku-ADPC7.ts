import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const patternedPillowCover02Preset =
  ProductVariantDraft.presets.sampleDataB2CLifestyle
    .patternedPillowCover02()
    .build<TProductVariantDraft>();

const skuADPC7 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(patternedPillowCover02Preset.sku!)
    .quantityOnStock(100);

export default skuADPC7;
