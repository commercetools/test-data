import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const ff890Op02 = ProductVariantDraft.presets.sampleDataB2B
  .ff890Op02()
  .build<TProductVariantDraft>();

const skuFF890OP2019 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(ff890Op02.sku!).quantityOnStock(1000);

export default skuFF890OP2019;
