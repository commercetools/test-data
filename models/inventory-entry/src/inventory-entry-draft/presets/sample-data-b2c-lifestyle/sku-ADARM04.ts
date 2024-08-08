import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const artDecoChair01Preset = ProductVariantDraft.presets.sampleDataB2CLifestyle
  .artDecoChair01()
  .build<TProductVariantDraft>();

const skuADARM04 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(artDecoChair01Preset.sku!)
    .quantityOnStock(100);

export default skuADARM04;
