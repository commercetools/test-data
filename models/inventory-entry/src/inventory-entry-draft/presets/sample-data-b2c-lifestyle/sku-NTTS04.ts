import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const nalaTwoSeaterSofa04Preset =
  ProductVariantDraft.presets.sampleDataB2CLifestyle
    .nalaTwoSeaterSofa04()
    .build<TProductVariantDraft>();

const skuNTTS04 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(nalaTwoSeaterSofa04Preset.sku!)
    .quantityOnStock(100);

export default skuNTTS04;
