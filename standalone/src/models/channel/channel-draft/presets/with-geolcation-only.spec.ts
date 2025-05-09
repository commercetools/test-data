import { roles } from '../../constants';
import { TChannelDraftGraphql, TChannelDraftRest } from '../../types';
import {
  restPreset,
  graphqlPreset,
  compatPreset,
} from './with-geolocation-only';

const channelExpectation = (
  channel: TChannelDraftRest | TChannelDraftGraphql
) => {
  expect(channel).toMatchObject({
    key: expect.any(String),
    roles: expect.arrayContaining([roles.Primary]),
    name: undefined,
    description: undefined,
    address: undefined,
    custom: undefined,
    geoLocation: expect.objectContaining({
      type: 'Point',
      coordinates: [expect.any(Number), expect.any(Number)],
    }),
  });
};

describe('WithGeoLocationOnly preset', () => {
  it('[REST] should set all specified fields to undefined', () => {
    const emptyChannelDraft = restPreset().build();
    channelExpectation(emptyChannelDraft);
  });
  it('[Graphql] should set all specified fields to undefined', () => {
    const emptyChannelDraft = graphqlPreset().build();
    channelExpectation(emptyChannelDraft);
  });
  it('[Compat - REST] should set all specified fields to undefined', () => {
    const emptyChannelDraft = compatPreset().buildRest();
    channelExpectation(emptyChannelDraft);
  });
  it('[Compat - Graphql] should set all specified fields to undefined', () => {
    const emptyChannelDraft = compatPreset().buildGraphql();
    channelExpectation(emptyChannelDraft);
  });
});
