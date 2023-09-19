import { LocalizedString } from '@commercetools-test-data/commons';
import { roles } from '../../../constants';
import * as ChannelDraft from '../../index';

const inventoryChannel = () =>
  ChannelDraft.presets
    .empty()
    .key('inventory-channel')
    .description(LocalizedString.presets.empty()['en-US']('Inventory Channel'))
    .name(LocalizedString.presets.empty()['en-US']('Inventory Channel'))
    .roles([roles.InventorySupply]);

export default inventoryChannel;
