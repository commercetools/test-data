import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const nn456St03 = ProductVariantDraft.presets.sampleDataB2B
  .nn456St03()
  .build<TProductVariantDraft>();

const skuNN456ST2023 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(nn456St03.sku!).quantityOnStock(1000);

export default skuNN456ST2023;
