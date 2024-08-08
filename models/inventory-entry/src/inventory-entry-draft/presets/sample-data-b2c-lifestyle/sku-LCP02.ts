import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const largeCeramicPlate02Preset =
  ProductVariantDraft.presets.sampleDataB2CLifestyle
    .largeCeramicPlate02()
    .build<TProductVariantDraft>();

const skuLCP02 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(largeCeramicPlate02Preset.sku!)
    .quantityOnStock(100);

export default skuLCP02;
