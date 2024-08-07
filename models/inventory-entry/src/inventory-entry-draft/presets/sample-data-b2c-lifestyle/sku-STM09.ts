import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const sandTeaCup01Preset = ProductVariantDraft.presets.sampleDataB2CLifestyle
  .sandTeaCup01()
  .build<TProductVariantDraft>();

const skuSTM09 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(sandTeaCup01Preset.sku!)
    .quantityOnStock(100);

export default skuSTM09;
