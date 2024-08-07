import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const lanaPillowCover01Preset =
  ProductVariantDraft.presets.sampleDataB2CLifestyle
    .lanaPillowCover01()
    .build<TProductVariantDraft>();

const skuLPC09 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(lanaPillowCover01Preset.sku!)
    .quantityOnStock(100);

export default skuLPC09;
