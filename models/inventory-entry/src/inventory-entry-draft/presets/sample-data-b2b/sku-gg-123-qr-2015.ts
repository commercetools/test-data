import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const gg123Qr01 = ProductVariantDraft.presets.sampleDataB2B
  .gg123Qr01()
  .build<TProductVariantDraft>();

const skuGG123QR2015 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(gg123Qr01.sku!).quantityOnStock(1000);

export default skuGG123QR2015;
