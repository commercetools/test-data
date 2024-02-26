import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const ledWorkLight01 = ProductVariantDraft.presets.sampleDataB2B
  .ledWorkLight01()
  .build<TProductVariantDraft>();

const skuLEDWORKLIGHT = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(ledWorkLight01.sku!)
    .quantityOnStock(1000);

export default skuLEDWORKLIGHT;
