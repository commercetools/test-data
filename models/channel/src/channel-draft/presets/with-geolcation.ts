import { ChannelDraft } from '../../index';

const withGeoLocation = () =>
  ChannelDraft.presets
    .empty()
    .geoLocation({ type: 'Point', coordinates: [47, 28] });
export default withGeoLocation;
