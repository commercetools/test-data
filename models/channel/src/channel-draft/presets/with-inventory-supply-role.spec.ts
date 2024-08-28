import { roles } from '../../constants';
import type { TChannelDraft } from '../../types';
import withInventorySupplyRole from './with-inventory-supply-role';

describe('with inventory supply role', () => {
  it('should have InventorySupply only role', () => {
    const channel = withInventorySupplyRole().build<TChannelDraft>();

    expect(channel).toEqual(
      expect.objectContaining({
        roles: expect.arrayContaining([roles.InventorySupply]),
      })
    );
  });
});
