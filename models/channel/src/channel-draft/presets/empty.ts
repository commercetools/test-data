import type { TChannelDraftBuilder } from '../../types';
import ChannelDraft from '../builder';

const empty = (): TChannelDraftBuilder =>
  ChannelDraft()
    .roles(undefined)
    .name(undefined)
    .address(undefined)
    .custom(undefined)
    .geoLocation(undefined);

export default empty;
