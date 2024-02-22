import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const p234Qw03 = ProductVariantDraft.presets.sampleDataB2B
  .p234Qw03()
  .build<TProductVariantDraft>();

const skuP234QW2023 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(p234Qw03.sku!).quantityOnStock(1000);

export default skuP234QW2023;
