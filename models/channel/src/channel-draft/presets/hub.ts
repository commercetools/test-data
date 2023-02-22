import { LocalizedString } from '@commercetools-test-data/commons';
import { roles } from '../../constants';
import ChannelDraft from '../builder';

const hub = () =>
  ChannelDraft()
    .key('hub')
    .address(undefined)
    .geoLocation(undefined)
    .custom(undefined)
    .description(LocalizedString.presets.empty()['en-US']('Hub'))
    .name(LocalizedString.presets.empty()['en-US']('Hub'))
    .roles([roles.ProductDistribution, roles.InventorySupply]);

export default hub;
