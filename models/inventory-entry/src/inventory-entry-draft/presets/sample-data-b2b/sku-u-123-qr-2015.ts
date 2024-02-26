import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const u123Qr01 = ProductVariantDraft.presets.sampleDataB2B
  .u123Qr01()
  .build<TProductVariantDraft>();

const skuU123QR2015 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(u123Qr01.sku!).quantityOnStock(1000);

export default skuU123QR2015;
