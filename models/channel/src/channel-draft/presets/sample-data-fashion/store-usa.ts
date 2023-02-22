import { LocalizedString } from '@commercetools-test-data/commons';
import { roles } from '../../../constants';
import ChannelDraft from '../../builder';

const storeUsa = () =>
  ChannelDraft()
    .key('store_usa')
    .address(undefined)
    .geoLocation(undefined)
    .custom(undefined)
    .description(LocalizedString.presets.empty()['en-US']('USA Store'))
    .name(LocalizedString.presets.empty()['en-US']('USA Store'))
    .roles([roles.ProductDistribution]);

export default storeUsa;
