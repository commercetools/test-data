import { LocalizedStringDraft } from '@commercetools-test-data/commons';
import { roles } from '../../../constants';
import * as ChannelDraft from '../../index';

const hub = () =>
  ChannelDraft.presets
    .empty()
    .key('hub')
    .description(LocalizedStringDraft.presets.empty()['en-US']('Hub'))
    .name(LocalizedStringDraft.presets.empty()['en-US']('Hub'))
    .roles([roles.ProductDistribution, roles.InventorySupply]);

export default hub;
