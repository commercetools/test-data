import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const abigailLoungeChair01Preset =
  ProductVariantDraft.presets.sampleDataB2CLifestyle
    .abigailLoungeChair01()
    .build<TProductVariantDraft>();

const skuALC01 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(abigailLoungeChair01Preset.sku!)
    .quantityOnStock(73);

export default skuALC01;
