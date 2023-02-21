import { LocalizedString } from '@commercetools-test-data/commons';
import { roles } from '../../constants';
import Channel from '../builder';

const storeUsa = () =>
  Channel()
    .key('store_usa')
    .address(undefined)
    .geoLocation(undefined)
    .custom(undefined)
    .description(LocalizedString.presets.empty().en('USA Store'))
    .name(LocalizedString.presets.empty().en('USA Store'))
    .roles([roles.ProductDistribution]);

export default storeUsa;
