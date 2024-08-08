import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const silkyPillowCover01Preset =
  ProductVariantDraft.presets.sampleDataB2CLifestyle
    .silkyPillowCover01()
    .build<TProductVariantDraft>();

const skuSPC06 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(silkyPillowCover01Preset.sku!)
    .quantityOnStock(100);

export default skuSPC06;
