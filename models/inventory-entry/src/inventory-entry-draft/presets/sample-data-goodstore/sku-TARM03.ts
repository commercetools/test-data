import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const turnerVelvetArmchair01Preset =
  ProductVariantDraft.presets.sampleDataGoodStore
    .turnerVelvetArmchair01()
    .build<TProductVariantDraft>();

const skuTARM03 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(turnerVelvetArmchair01Preset.sku!)
    .quantityOnStock(100);

export default skuTARM03;
