import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const yy123Qr01 = ProductVariantDraft.presets.sampleDataB2B
  .yy123Qr01()
  .build<TProductVariantDraft>();

const skuYY123QRRED = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets.empty().sku(yy123Qr01.sku!).quantityOnStock(1000);

export default skuYY123QRRED;
