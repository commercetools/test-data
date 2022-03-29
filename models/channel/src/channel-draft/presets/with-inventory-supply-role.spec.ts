import withInventorySupplyRole from './with-inventory-supply-role';
import { roles } from '../../constants';
import { TChannelDraft } from '../../types';

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
