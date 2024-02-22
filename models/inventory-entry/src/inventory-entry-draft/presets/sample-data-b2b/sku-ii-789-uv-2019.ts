import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const ii789Uv02 = ProductVariantDraft.presets.sampleDataB2B
  .ii789Uv02()
  .build<TProductVariantDraft>();

const skuII789UV2019 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(ii789Uv02.sku!).quantityOnStock(1000);

export default skuII789UV2019;
