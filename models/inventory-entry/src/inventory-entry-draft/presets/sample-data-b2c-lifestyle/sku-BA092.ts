import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const leatherWeaveChair01Preset =
  ProductVariantDraft.presets.sampleDataB2CLifestyle
    .leatherWeaveChair01()
    .build<TProductVariantDraft>();

const skuBA092 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(leatherWeaveChair01Preset.sku!)
    .quantityOnStock(98);

export default skuBA092;
