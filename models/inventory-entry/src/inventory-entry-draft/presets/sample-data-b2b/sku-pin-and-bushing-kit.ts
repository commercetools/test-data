import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const pinAndBushingKit01 = ProductVariantDraft.presets.sampleDataB2B
  .pinAndBushingKit01()
  .build<TProductVariantDraft>();

const skuPINANDBUSHINGKIT = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(pinAndBushingKit01.sku!)
    .quantityOnStock(1000);

export default skuPINANDBUSHINGKIT;
