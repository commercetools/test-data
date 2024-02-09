import { LocalizedStringDraft } from '@commercetools-test-data/commons';
import { roles } from '../../../constants';
import * as ChannelDraft from '../../index';

const distributionChannel = () =>
  ChannelDraft.presets
    .empty()
    .key('distribution-channel')
    .description(
      LocalizedStringDraft.presets.empty()['en-US']('Distribution Channel')
    )
    .name(LocalizedStringDraft.presets.empty()['en-US']('Distribution Channel'))
    .roles([roles.ProductDistribution]);

export default distributionChannel;
