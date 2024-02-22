import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const a789Bc03 = ProductVariantDraft.presets.sampleDataB2B
  .a789Bc03()
  .build<TProductVariantDraft>();

const skuA789BC2023 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(a789Bc03.sku!).quantityOnStock(1000);

export default skuA789BC2023;
