import { TChannelDraftGraphql, TChannelDraftRest } from '../../types';
import { restPreset, graphqlPreset, compatPreset } from './empty';

const channelExpectation = (
  channel: TChannelDraftRest | TChannelDraftGraphql
) => {
  expect(channel).toMatchObject({
    roles: undefined,
    name: undefined,
    address: undefined,
    custom: undefined,
    geoLocation: undefined,
  });
};

describe('Empty preset', () => {
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
