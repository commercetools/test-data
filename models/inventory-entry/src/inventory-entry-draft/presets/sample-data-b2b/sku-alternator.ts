import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const alternator01 = ProductVariantDraft.presets.sampleDataB2B
  .alternator01()
  .build<TProductVariantDraft>();

const skuALTERNATOR = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(alternator01.sku!)
    .quantityOnStock(1000);

export default skuALTERNATOR;
