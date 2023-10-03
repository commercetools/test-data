import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const teakServingPlatter01Preset =
  ProductVariantDraft.presets.sampleDataGoodStore
    .teakServingPlatter01()
    .build<TProductVariantDraft>();

const skuTST02 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(teakServingPlatter01Preset.sku!)
    .quantityOnStock(100);

export default skuTST02;
