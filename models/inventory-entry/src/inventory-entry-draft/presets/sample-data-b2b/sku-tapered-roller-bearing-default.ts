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

const defaultWarehouse = ChannelDraft.presets.sampleDataB2B
  .defaultWarehouse()
  .build<TChannelDraft>();

const taperedRollerBearing01 = ProductVariantDraft.presets.sampleDataB2B
  .taperedRollerBearing01()
  .build<TProductVariantDraft>();

const skuTaperedRollerBearingDefault = (): TInventoryEntryDraftBuilder =>
  InventoryEntryDraft.presets
    .empty()
    .key(`${taperedRollerBearing01.sku}-${defaultWarehouse.key}`)
    .sku(taperedRollerBearing01.sku!)
    .quantityOnStock(1000)
    .channel({ typeId: 'channel', key: defaultWarehouse.key });

export default skuTaperedRollerBearingDefault;
