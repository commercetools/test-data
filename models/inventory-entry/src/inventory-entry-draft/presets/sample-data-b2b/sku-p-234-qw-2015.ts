import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const p234Qw01 = ProductVariantDraft.presets.sampleDataB2B
  .p234Qw01()
  .build<TProductVariantDraft>();

const skuP234QW2015 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(p234Qw01.sku!).quantityOnStock(1000);

export default skuP234QW2015;
