import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const nalaTwoSeaterSofa03Preset =
  ProductVariantDraft.presets.sampleDataB2CLifestyle
    .nalaTwoSeaterSofa03()
    .build<TProductVariantDraft>();

const skuNTSS03 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(nalaTwoSeaterSofa03Preset.sku!)
    .quantityOnStock(100);

export default skuNTSS03;
