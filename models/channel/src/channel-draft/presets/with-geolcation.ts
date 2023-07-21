import ChannelDraft from '../builder';

const withGeoLocation = () =>
  ChannelDraft().geoLocation({ type: 'Point', coordinates: [45, 28] });
export default withGeoLocation;
