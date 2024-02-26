import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const k567Yz02 = ProductVariantDraft.presets.sampleDataB2B
  .k567Yz02()
  .build<TProductVariantDraft>();

const skuK567YZ2019 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(k567Yz02.sku!).quantityOnStock(1000);

export default skuK567YZ2019;
