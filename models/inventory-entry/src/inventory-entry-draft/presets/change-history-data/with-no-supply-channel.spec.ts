import type { TInventoryEntryDraft } from '../../../types';
import withNoSupplyChannel from './with-no-supply-channel';

describe('Inventory Entry with no supply channel', () => {
  it('should return an inventory entry with supply channel undefined', () => {
    const inventoryEntry = withNoSupplyChannel().build<TInventoryEntryDraft>();

    expect(inventoryEntry).toEqual(
      expect.objectContaining({
        supplyChannel: undefined,
      })
    );
  });
});
