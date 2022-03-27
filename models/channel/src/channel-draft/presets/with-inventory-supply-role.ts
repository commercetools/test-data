import { roles } from '../../constants';
import Channel from '../builder';

const withInventorySupplyRole = () => Channel().roles([roles.InventorySupply]);

export default withInventorySupplyRole;
