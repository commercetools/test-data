import { roles } from '../../constants';
import Channel from '../builder';

const withInventorySupplyRoleNoAddress = () =>
  Channel().address(undefined).roles([roles.InventorySupply]);

export default withInventorySupplyRoleNoAddress;
