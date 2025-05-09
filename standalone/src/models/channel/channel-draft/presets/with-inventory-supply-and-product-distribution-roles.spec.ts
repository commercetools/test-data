import { roles } from '../../constants';
import { TChannelDraftGraphql, TChannelDraftRest } from '../../types';
import {
  restPreset,
  graphqlPreset,
  compatPreset,
} from './with-inventory-supply-and-product-distribution-roles';

const channelExpectation = (
  channel: TChannelDraftRest | TChannelDraftGraphql
) => {
  expect(channel).toMatchObject({
    roles: expect.arrayContaining([
      roles.InventorySupply,
      roles.ProductDistribution,
    ]),
  });
};

describe('WithInventorySupplyAndProductDistributionRoles preset', () => {
  it('[REST] should have InventorySupply and ProductDistribution roles', () => {
    const emptyChannelDraft = restPreset().build();
    channelExpectation(emptyChannelDraft);
  });
  it('[Graphql] should have InventorySupply and ProductDistribution roles', () => {
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
