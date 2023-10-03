import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const luxePillowCover01Preset = ProductVariantDraft.presets.sampleDataGoodStore
  .luxePillowCover01()
  .build<TProductVariantDraft>();

const skuLPC011 = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .sku(luxePillowCover01Preset.sku!)
    .quantityOnStock(100);

export default skuLPC011;
