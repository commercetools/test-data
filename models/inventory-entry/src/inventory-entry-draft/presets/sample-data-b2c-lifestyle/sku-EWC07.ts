import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const entrywayCloset01Preset =
  ProductVariantDraft.presets.sampleDataB2CLifestyle
    .entrywayCloset01()
    .build<TProductVariantDraft>();

const skuEWC07 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(entrywayCloset01Preset.sku!)
    .quantityOnStock(100);

export default skuEWC07;
