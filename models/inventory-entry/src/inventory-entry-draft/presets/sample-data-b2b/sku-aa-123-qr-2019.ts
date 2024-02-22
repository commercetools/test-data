import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const aa123Qr02 = ProductVariantDraft.presets.sampleDataB2B
  .aa123Qr02()
  .build<TProductVariantDraft>();

const skuAA123QR2019 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(aa123Qr02.sku!).quantityOnStock(1000);

export default skuAA123QR2019;
