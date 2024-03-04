import {
  ChannelDraft,
  type TChannelDraft,
} from '@commercetools-test-data/channel';
import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import type { TInventoryEntryDraftBuilder } from '../../../types';
import * as InventoryEntryDraft from '../../index';

const usWarehouse = ChannelDraft.presets.sampleDataB2B
  .usWarehouse()
  .build<TChannelDraft>();

const starterMotor01 = ProductVariantDraft.presets.sampleDataB2B
  .starterMotor01()
  .build<TProductVariantDraft>();

const skuStarterMotorUs = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .key(`${starterMotor01.sku}-${usWarehouse.key}`)
    .sku(starterMotor01.sku!)
    .quantityOnStock(1000)
    .channel({ typeId: 'channel', key: usWarehouse.key });

export default skuStarterMotorUs;
