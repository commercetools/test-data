import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const modernBlackCoaster01Preset =
  ProductVariantDraft.presets.sampleDataB2CLifestyle
    .modernBlackCoaster01()
    .build<TProductVariantDraft>();

const skuBCOAS08 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(modernBlackCoaster01Preset.sku!)
    .quantityOnStock(100);

export default skuBCOAS08;
