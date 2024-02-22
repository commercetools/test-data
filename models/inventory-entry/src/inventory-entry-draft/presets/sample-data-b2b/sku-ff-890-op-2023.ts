import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const ff890Op03 = ProductVariantDraft.presets.sampleDataB2B
  .ff890Op03()
  .build<TProductVariantDraft>();

const skuFF890OP2023 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(ff890Op03.sku!).quantityOnStock(1000);

export default skuFF890OP2023;
