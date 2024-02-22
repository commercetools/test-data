import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const m890Op02 = ProductVariantDraft.presets.sampleDataB2B
  .m890Op02()
  .build<TProductVariantDraft>();

const skuM890OP2019 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(m890Op02.sku!).quantityOnStock(1000);

export default skuM890OP2019;
