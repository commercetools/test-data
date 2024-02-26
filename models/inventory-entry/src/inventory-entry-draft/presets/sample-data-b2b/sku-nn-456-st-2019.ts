import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const nn456St02 = ProductVariantDraft.presets.sampleDataB2B
  .nn456St02()
  .build<TProductVariantDraft>();

const skuNN456ST2019 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(nn456St02.sku!).quantityOnStock(1000);

export default skuNN456ST2019;
