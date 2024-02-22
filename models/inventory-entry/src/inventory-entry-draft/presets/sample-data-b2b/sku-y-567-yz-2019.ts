import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const y567Yz02 = ProductVariantDraft.presets.sampleDataB2B
  .y567Yz02()
  .build<TProductVariantDraft>();

const skuY567YZ2019 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(y567Yz02.sku!).quantityOnStock(1000);

export default skuY567YZ2019;
