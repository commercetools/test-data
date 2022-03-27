import { roles } from '../../constants';
import Channel from '../builder';

const withInventorySupplyAndProductDistributionRoles = () =>
  Channel().roles([roles.InventorySupply, roles.ProductDistribution]);

export default withInventorySupplyAndProductDistributionRoles;
