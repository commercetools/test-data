import withProductDistributionRole from './with-product-distribution-role';
import withInventorySupplyRole from './with-inventory-supply-role';
import withInventorySupplyRoleNoAddress from './with-inventory-supply-role-no-address';
import withInventorySupplyAndProductDistributionRoles from './with-inventory-supply-and-product-distribution-roles';
import withInventorySupplyAndProductDistributionRolesNoAddress from './with-inventory-supply-and-product-distribution-roles-no-address';

const presets = {
  withProductDistributionRole,
  withInventorySupplyRole,
  withInventorySupplyRoleNoAddress,
  withInventorySupplyAndProductDistributionRoles,
  withInventorySupplyAndProductDistributionRolesNoAddress,
};

export default presets;
