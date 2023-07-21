import type { TChannelDraftBuilder } from '../../types';
import ChannelDraft from '../builder';

const withGeoLocationOnly = (): TChannelDraftBuilder =>
  ChannelDraft()
    .name(undefined)
    .description(undefined)
    .address(undefined)
    .custom(undefined);

export default withGeoLocationOnly;
