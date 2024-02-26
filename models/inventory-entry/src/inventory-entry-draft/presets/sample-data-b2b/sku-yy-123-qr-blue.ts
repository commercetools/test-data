import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const yy123Qr02 = ProductVariantDraft.presets.sampleDataB2B
  .yy123Qr02()
  .build<TProductVariantDraft>();

const skuYY123QRBLUE = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(yy123Qr02.sku!).quantityOnStock(1000);

export default skuYY123QRBLUE;
