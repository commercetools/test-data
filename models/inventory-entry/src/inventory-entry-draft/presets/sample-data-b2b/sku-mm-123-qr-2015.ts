import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const mm123Qr01 = ProductVariantDraft.presets.sampleDataB2B
  .mm123Qr01()
  .build<TProductVariantDraft>();

const skuMM123QR2015 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(mm123Qr01.sku!).quantityOnStock(1000);

export default skuMM123QR2015;
