import { roles } from '../../constants';
import Channel from '../builder';

const withInventorySupplyAndProductDistributionRolesNoAddress = () =>
  Channel()
    .address(undefined)
    .roles([roles.InventorySupply, roles.ProductDistribution]);

export default withInventorySupplyAndProductDistributionRolesNoAddress;
