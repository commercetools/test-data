import { roles } from '../../constants';
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

  it('should return `undefined` for all non mandatory fields', () => {
    const channelWithGeoLocationAndMandotryFields =
      withGeoLocationOnly().build<TChannelDraft>();

    expect(channelWithGeoLocationAndMandotryFields).toMatchObject({
      key: expect.any(String),
      roles: expect.arrayContaining([roles.Primary]),
      description: undefined,
      name: undefined,
      address: undefined,
      custom: undefined,
    });
  });
});
