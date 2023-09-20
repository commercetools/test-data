import { LocalizedString } from '@commercetools-test-data/commons';
import { roles } from '../../../constants';
import * as ChannelDraft from '../../index';

const distributionChannel = () =>
  ChannelDraft.presets
    .empty()
    .key('distribution-channel')
    .description(
      LocalizedString.presets.empty()['en-US']('Distribution Channel')
    )
    .name(LocalizedString.presets.empty()['en-US']('Distribution Channel'))
    .roles([roles.ProductDistribution]);

export default distributionChannel;
