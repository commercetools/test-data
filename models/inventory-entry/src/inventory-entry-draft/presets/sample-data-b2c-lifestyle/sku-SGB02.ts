import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const sunnaiGlassBowl02Preset =
  ProductVariantDraft.presets.sampleDataB2CLifestyle
    .sunnaiGlassBowl02()
    .build<TProductVariantDraft>();

const skuSGB02 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(sunnaiGlassBowl02Preset.sku!)
    .quantityOnStock(100);

export default skuSGB02;
