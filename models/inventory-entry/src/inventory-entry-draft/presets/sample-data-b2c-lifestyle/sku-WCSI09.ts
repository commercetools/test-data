import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const walnutCounterStool01Preset =
  ProductVariantDraft.presets.sampleDataB2CLifestyle
    .walnutCounterStool01()
    .build<TProductVariantDraft>();

const skuWCSI09 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(walnutCounterStool01Preset.sku!)
    .quantityOnStock(100);

export default skuWCSI09;
