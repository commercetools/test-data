import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const roundServingTray01Preset =
  ProductVariantDraft.presets.sampleDataB2CLifestyle
    .roundServingTray01()
    .build<TProductVariantDraft>();

const skuRST01 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(roundServingTray01Preset.sku!)
    .quantityOnStock(100);

export default skuRST01;
