import {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  restPreset,
  graphqlPreset,
  compatPreset,
} from './with-no-supply-channel';

const inventoryEntryExpectation = (
  inventoryEntry: TInventoryEntryDraftRest | TInventoryEntryDraftGraphql
) => {
  expect(inventoryEntry).toMatchObject({
    supplyChannel: undefined,
  });
};

describe('WithNoSupplyChannel preset', () => {
  it('[REST] should set all specified fields to undefined', () => {
    const emptyInventoryEntryDraft = restPreset().build();
    inventoryEntryExpectation(emptyInventoryEntryDraft);
  });
  it('[Graphql] should set all specified fields to undefined', () => {
    const emptyInventoryEntryDraft = graphqlPreset().build();
    inventoryEntryExpectation(emptyInventoryEntryDraft);
  });
  it('[Compat - REST] should set all specified fields to undefined', () => {
    const emptyInventoryEntryDraft = compatPreset().buildRest();
    inventoryEntryExpectation(emptyInventoryEntryDraft);
  });
  it('[Compat - Graphql] should set all specified fields to undefined', () => {
    const emptyInventoryEntryDraft = compatPreset().buildGraphql();
    inventoryEntryExpectation(emptyInventoryEntryDraft);
  });
});
