import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const u123Qr02 = ProductVariantDraft.presets.sampleDataB2B
  .u123Qr02()
  .build<TProductVariantDraft>();

const skuU123QR2019 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(u123Qr02.sku!).quantityOnStock(1000);

export default skuU123QR2019;
