import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const vanillaCandle01Preset = ProductVariantDraft.presets.sampleDataB2CLifestyle
  .vanillaCandle01()
  .build<TProductVariantDraft>();

const skuVC01 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(vanillaCandle01Preset.sku!)
    .quantityOnStock(98);

export default skuVC01;
