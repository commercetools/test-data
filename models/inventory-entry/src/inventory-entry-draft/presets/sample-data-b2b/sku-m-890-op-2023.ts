import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const m890Op03 = ProductVariantDraft.presets.sampleDataB2B
  .m890Op03()
  .build<TProductVariantDraft>();

const skuM890OP2023 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(m890Op03.sku!).quantityOnStock(1000);

export default skuM890OP2023;
