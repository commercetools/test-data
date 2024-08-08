import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const sunnaiGlassBowl01Preset =
  ProductVariantDraft.presets.sampleDataB2CLifestyle
    .sunnaiGlassBowl01()
    .build<TProductVariantDraft>();

const skuSGB01 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(sunnaiGlassBowl01Preset.sku!)
    .quantityOnStock(1000);

export default skuSGB01;
