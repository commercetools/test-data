import { LocalizedStringDraft } from '@commercetools-test-data/commons';
import { roles } from '../../../constants';
import * as ChannelDraft from '../../index';

const storeOther = () =>
  ChannelDraft.presets
    .empty()
    .key('store_other')
    .description(LocalizedStringDraft.presets.empty()['en-US']('Store Other'))
    .name(LocalizedStringDraft.presets.empty()['en-US']('Store Other'))
    .roles([roles.ProductDistribution]);

export default storeOther;
