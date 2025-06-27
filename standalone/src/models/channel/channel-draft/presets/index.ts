import * as empty from './empty';
import * as withGeoLocationOnly from './with-geolocation-only';
import * as withInventorySupplyAndProductDistributionRoles from './with-inventory-supply-and-product-distribution-roles';
import * as withInventorySupplyAndProductDistributionRolesNoAddress from './with-inventory-supply-and-product-distribution-roles-no-address';
import * as withInventorySupplyRole from './with-inventory-supply-role';
import * as withInventorySupplyRoleNoAddress from './with-inventory-supply-role-no-address';
import * as withProductDistributionRole from './with-product-distribution-role';

export const restPresets = {
  empty: empty.restPreset,
  withGeoLocationOnly: withGeoLocationOnly.restPreset,
  withInventorySupplyAndProductDistributionRoles:
    withInventorySupplyAndProductDistributionRoles.restPreset,
  withInventorySupplyAndProductDistributionRolesNoAddress:
    withInventorySupplyAndProductDistributionRolesNoAddress.restPreset,
  withInventorySupplyRole: withInventorySupplyRole.restPreset,
  withInventorySupplyRoleNoAddress: withInventorySupplyRoleNoAddress.restPreset,
  withProductDistributionRole: withProductDistributionRole.restPreset,
};

export const graphqlPresets = {
  empty: empty.graphqlPreset,
  withGeoLocationOnly: withGeoLocationOnly.graphqlPreset,
  withInventorySupplyAndProductDistributionRoles:
    withInventorySupplyAndProductDistributionRoles.graphqlPreset,
  withInventorySupplyAndProductDistributionRolesNoAddress:
    withInventorySupplyAndProductDistributionRolesNoAddress.graphqlPreset,
  withInventorySupplyRole: withInventorySupplyRole.graphqlPreset,
  withInventorySupplyRoleNoAddress:
    withInventorySupplyRoleNoAddress.graphqlPreset,
  withProductDistributionRole: withProductDistributionRole.graphqlPreset,
};

export const compatPresets = {
  empty: empty.compatPreset,
  withGeoLocationOnly: withGeoLocationOnly.compatPreset,
  withInventorySupplyAndProductDistributionRoles:
    withInventorySupplyAndProductDistributionRoles.compatPreset,
  withInventorySupplyAndProductDistributionRolesNoAddress:
    withInventorySupplyAndProductDistributionRolesNoAddress.compatPreset,
  withInventorySupplyRole: withInventorySupplyRole.compatPreset,
  withInventorySupplyRoleNoAddress:
    withInventorySupplyRoleNoAddress.compatPreset,
  withProductDistributionRole: withProductDistributionRole.compatPreset,
};
