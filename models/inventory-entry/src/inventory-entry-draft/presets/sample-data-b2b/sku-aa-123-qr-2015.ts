import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const aa123Qr01 = ProductVariantDraft.presets.sampleDataB2B
  .aa123Qr01()
  .build<TProductVariantDraft>();

const skuAA123QR2015 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(aa123Qr01.sku!).quantityOnStock(1000);

export default skuAA123QR2015;
