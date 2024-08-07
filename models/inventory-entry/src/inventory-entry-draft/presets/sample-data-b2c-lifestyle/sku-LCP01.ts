import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const largeCeramicPlate01Preset =
  ProductVariantDraft.presets.sampleDataB2CLifestyle
    .largeCeramicPlate01()
    .build<TProductVariantDraft>();

const skuLCP01 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(largeCeramicPlate01Preset.sku!)
    .quantityOnStock(74);

export default skuLCP01;
