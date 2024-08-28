import { roles } from '../../constants';
import type { TChannelDraft } from '../../types';
import withInventorySupplyRoleNoAddress from './with-inventory-supply-role-no-address';

it('should have InventorySupply role with no address', () => {
  const channel = withInventorySupplyRoleNoAddress().build<TChannelDraft>();

  expect(channel).toEqual(
    expect.objectContaining({
      roles: expect.arrayContaining([roles.InventorySupply]),
      address: undefined,
    })
  );
});
