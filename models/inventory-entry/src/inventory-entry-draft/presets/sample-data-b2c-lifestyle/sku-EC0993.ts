import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const evergreenCandle01Preset =
  ProductVariantDraft.presets.sampleDataB2CLifestyle
    .evergreenCandle01()
    .build<TProductVariantDraft>();

const skuEC0993 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(evergreenCandle01Preset.sku!)
    .quantityOnStock(100);

export default skuEC0993;
