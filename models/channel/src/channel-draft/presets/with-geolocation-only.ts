import type { TChannelDraftBuilder } from '../../types';
import ChannelDraft from '../builder';

//this presets empties all values except geoLocation & key (which is a required field)

const withGeoLocationOnly = (): TChannelDraftBuilder =>
  ChannelDraft()
    .roles(undefined)
    .name(undefined)
    .description(undefined)
    .address(undefined)
    .custom(undefined);

export default withGeoLocationOnly;
