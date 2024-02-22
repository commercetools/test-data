import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const g123Qr01 = ProductVariantDraft.presets.sampleDataB2B
  .g123Qr01()
  .build<TProductVariantDraft>();

const skuG123QR2015 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(g123Qr01.sku!).quantityOnStock(1000);

export default skuG123QR2015;
