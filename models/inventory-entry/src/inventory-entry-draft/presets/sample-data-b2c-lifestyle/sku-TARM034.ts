import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const traditionalArmchair01Preset =
  ProductVariantDraft.presets.sampleDataB2CLifestyle
    .traditionalArmchair01()
    .build<TProductVariantDraft>();

const skuTARM034 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(traditionalArmchair01Preset.sku!)
    .quantityOnStock(100);

export default skuTARM034;
