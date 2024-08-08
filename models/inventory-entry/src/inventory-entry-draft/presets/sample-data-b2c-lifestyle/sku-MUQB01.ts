import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const modernUpholsteredQueenBed01Preset =
  ProductVariantDraft.presets.sampleDataB2CLifestyle
    .modernUpholsteredQueenBed01()
    .build<TProductVariantDraft>();

const skuMUQB01 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(modernUpholsteredQueenBed01Preset.sku!)
    .quantityOnStock(95);

export default skuMUQB01;
