import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const squareBambooCoaster01Preset =
  ProductVariantDraft.presets.sampleDataB2CLifestyle
    .squareBambooCoaster01()
    .build<TProductVariantDraft>();

const skuBAMB084 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(squareBambooCoaster01Preset.sku!)
    .quantityOnStock(100);

export default skuBAMB084;
