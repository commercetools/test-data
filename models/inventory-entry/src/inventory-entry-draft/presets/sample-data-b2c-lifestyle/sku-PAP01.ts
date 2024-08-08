import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const pinkAbstractPainting01Preset =
  ProductVariantDraft.presets.sampleDataB2CLifestyle
    .pinkAbstractPainting01()
    .build<TProductVariantDraft>();

const skuPAP01 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(pinkAbstractPainting01Preset.sku!)
    .quantityOnStock(95);

export default skuPAP01;
