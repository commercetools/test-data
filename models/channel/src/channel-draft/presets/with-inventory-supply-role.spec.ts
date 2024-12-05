import { roles } from '../../constants';
import { TChannelDraftGraphql, TChannelDraftRest } from '../../types';
import {
  restPreset,
  graphqlPreset,
  compatPreset,
} from './with-inventory-supply-role';

const channelExpectation = (
  channel: TChannelDraftRest | TChannelDraftGraphql
) => {
  expect(channel).toMatchObject({
    roles: expect.arrayContaining([roles.InventorySupply]),
  });
};

describe('WithInventorySupplyRole preset', () => {
  it('[REST] should have InventorySupply only role', () => {
    const emptyChannelDraft = restPreset().build();
    channelExpectation(emptyChannelDraft);
  });
  it('[Graphql] should have InventorySupply only role', () => {
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
