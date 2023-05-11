import { LocalizedString } from '@commercetools-test-data/commons';
import { roles } from '../../../constants';
import * as ChannelDraft from '../../index';

const hub = () =>
  ChannelDraft.presets
    .empty()
    .key('hub')
    .description(LocalizedString.presets.empty()['en-US']('Hub'))
    .name(LocalizedString.presets.empty()['en-US']('Hub'))
    .roles([roles.ProductDistribution, roles.InventorySupply]);

export default hub;
