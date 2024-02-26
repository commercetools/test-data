import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const oo789Uv02 = ProductVariantDraft.presets.sampleDataB2B
  .oo789Uv02()
  .build<TProductVariantDraft>();

const skuOO789UV2019 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(oo789Uv02.sku!).quantityOnStock(1000);

export default skuOO789UV2019;
