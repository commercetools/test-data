import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const n123Qr01 = ProductVariantDraft.presets.sampleDataB2B
  .n123Qr01()
  .build<TProductVariantDraft>();

const skuN123QR2015 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(n123Qr01.sku!).quantityOnStock(1000);

export default skuN123QR2015;
