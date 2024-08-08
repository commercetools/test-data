import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const nalaTwoSeaterSofa02Preset =
  ProductVariantDraft.presets.sampleDataB2CLifestyle
    .nalaTwoSeaterSofa02()
    .build<TProductVariantDraft>();

const skuNTSS02 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(nalaTwoSeaterSofa02Preset.sku!)
    .quantityOnStock(100);

export default skuNTSS02;
