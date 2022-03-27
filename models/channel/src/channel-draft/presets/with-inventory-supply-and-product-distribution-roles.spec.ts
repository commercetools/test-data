import { roles } from '../../constants';
import { TChannelDraft } from '../../types';
import withInventorySupplyAndProductDistributionRoles from './with-inventory-supply-and-product-distribution-roles';

describe('with inventory supply and product distribution roles', () => {
  it('should have InventorySupply and ProductDistribution roles', () => {
    const channel =
      withInventorySupplyAndProductDistributionRoles().build<TChannelDraft>();

    expect(channel).toEqual(
      expect.objectContaining({
        roles: expect.arrayContaining([
          roles.InventorySupply,
          roles.ProductDistribution,
        ]),
      })
    );
  });
});
