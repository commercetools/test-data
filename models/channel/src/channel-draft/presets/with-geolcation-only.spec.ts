import type { TChannelDraft } from '../../types';
import withGeoLocationOnly from './with-geolocation-only';

describe('Channel with geolocation', () => {
  it('should return a geolocation containing both longitude and latitude', () => {
    const channelWithGeoLocationOnly =
      withGeoLocationOnly().build<TChannelDraft>();

    expect(channelWithGeoLocationOnly).toEqual(
      expect.objectContaining({
        geoLocation: {
          type: 'Point',
          coordinates: [expect.any(Number), expect.any(Number)],
        },
      })
    );
  });
});
