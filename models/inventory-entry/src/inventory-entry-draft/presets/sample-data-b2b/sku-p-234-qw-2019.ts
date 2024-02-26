import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const p234Qw02 = ProductVariantDraft.presets.sampleDataB2B
  .p234Qw02()
  .build<TProductVariantDraft>();

const skuP234QW2019 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(p234Qw02.sku!).quantityOnStock(1000);

export default skuP234QW2019;
