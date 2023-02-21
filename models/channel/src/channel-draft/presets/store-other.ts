import { LocalizedString } from '@commercetools-test-data/commons';
import { roles } from '../../constants';
import Channel from '../builder';

const storeOther = () =>
  Channel()
    .key('store_other')
    .address(undefined)
    .geoLocation(undefined)
    .custom(undefined)
    .description(LocalizedString.presets.empty()['en-US']('Store Other'))
    .name(LocalizedString.presets.empty()['en-US']('Store Other'))
    .roles([roles.ProductDistribution]);

export default storeOther;
