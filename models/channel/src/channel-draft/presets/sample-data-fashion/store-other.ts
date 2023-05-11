import { LocalizedString } from '@commercetools-test-data/commons';
import { roles } from '../../../constants';
import * as ChannelDraft from '../../index';

const storeOther = () =>
  ChannelDraft.presets
    .empty()
    .key('store_other')
    .description(LocalizedString.presets.empty()['en-US']('Store Other'))
    .name(LocalizedString.presets.empty()['en-US']('Store Other'))
    .roles([roles.ProductDistribution]);

export default storeOther;
