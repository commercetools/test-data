import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const c789Uv02 = ProductVariantDraft.presets.sampleDataB2B
  .c789Uv02()
  .build<TProductVariantDraft>();

const skuC789UV2019 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(c789Uv02.sku!).quantityOnStock(1000);

export default skuC789UV2019;
