import type { TChannelDraft } from '../../types';
import withGeoLocationOnly from './with-geolocation-only';

describe('Channel with geolocation', () => {
  it('should return a geolocation containing both longitude and latitude', () => {
    const channelWithGeoLocationOnly =
      withGeoLocationOnly().build<TChannelDraft>();

    /// here you can add asserts to ensure all but coordinates & key are null
    // note i have it erring on purpose so that you can see the object it's creating

    expect(channelWithGeoLocationOnly).toEqual(
      expect.objectContaining({
        geoLocation: {
          type: 'Point',
          coordinates: [45, 28],
        },
      })
    );
  });
});
