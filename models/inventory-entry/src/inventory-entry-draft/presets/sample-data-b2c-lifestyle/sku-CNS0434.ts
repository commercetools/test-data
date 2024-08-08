import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const minimalistCedarNightstand01Preset =
  ProductVariantDraft.presets.sampleDataB2CLifestyle
    .minimalistCedarNightstand01()
    .build<TProductVariantDraft>();

const skuCNS0434 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(minimalistCedarNightstand01Preset.sku!)
    .quantityOnStock(100);

export default skuCNS0434;
