import type { TChannelDraftBuilder } from '../../types';
import ChannelDraft from '../builder';

const withGeoLocation = () => ChannelDraft().geoLocation();

export default withGeoLocation;
