import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const taperedRollerBearing01 = ProductVariantDraft.presets.sampleDataB2B
  .taperedRollerBearing01()
  .build<TProductVariantDraft>();

const skuTAPEREDROLLERBEARING = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(taperedRollerBearing01.sku!)
    .quantityOnStock(1000);

export default skuTAPEREDROLLERBEARING;
