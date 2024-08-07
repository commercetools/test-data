import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const ravenBowl01Preset = ProductVariantDraft.presets.sampleDataB2CLifestyle
  .ravenBowl01()
  .build<TProductVariantDraft>();

const skuRB093 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(ravenBowl01Preset.sku!)
    .quantityOnStock(100);

export default skuRB093;
