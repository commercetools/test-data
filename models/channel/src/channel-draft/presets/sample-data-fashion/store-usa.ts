import { LocalizedString } from '@commercetools-test-data/commons';
import { roles } from '../../../constants';
import * as ChannelDraft from '../../index';

const storeUsa = () =>
  ChannelDraft.presets
    .empty()
    .key('store_usa')
    .description(LocalizedString.presets.empty()['en-US']('USA Store'))
    .name(LocalizedString.presets.empty()['en-US']('USA Store'))
    .roles([roles.ProductDistribution]);

export default storeUsa;
