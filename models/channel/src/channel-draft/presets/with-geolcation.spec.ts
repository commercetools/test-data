import type { TChannelDraft } from '../../types';
import withGeoLocation from './with-geolcation';

describe('Channel with geolocation', () => {
  it('should return a geolocation containing both longitude and langitude', () => {
    const channelWithGeoLocation = withGeoLocation().build<TChannelDraft>();

    expect(channelWithGeoLocation).toEqual(
      expect.objectContaining({
        coordinates: [expect.any(Number), expect.any(String)],
      })
    );
  });
});
