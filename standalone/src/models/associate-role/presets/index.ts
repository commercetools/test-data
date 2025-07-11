import * as withAllBusinessUnitPermissionsPresets from './with-all-business-unit-permissions';
import * as withAllCartPermissionsPresets from './with-all-cart-permissions';
import * as withAllOrderPermissionsPresets from './with-all-order-permissions';
import * as withAllQuotePermissionsPresets from './with-all-quote-permissions';
import * as withAllQuoteRequestPermissionsPresets from './with-all-quote-request-permissions';
import * as withMyCartPermissionsPresets from './with-my-cart-permissions';
import * as withMyOrderPermissionsPresets from './with-my-order-permissions';
import * as withMyQuotePermissionsPresets from './with-my-quote-permissions';
import * as withMyQuoteRequestPermissionsPresets from './with-my-quote-request-permissions';

export const restPresets = {
  withAllBusinessUnitPermissions:
    withAllBusinessUnitPermissionsPresets.restPreset,
  withAllCartPermissions: withAllCartPermissionsPresets.restPreset,
  withAllOrderPermissions: withAllOrderPermissionsPresets.restPreset,
  withAllQuotePermissions: withAllQuotePermissionsPresets.restPreset,
  withAllQuoteRequestPermissions:
    withAllQuoteRequestPermissionsPresets.restPreset,
  withMyCartPermissions: withMyCartPermissionsPresets.restPreset,
  withMyOrderPermissions: withMyOrderPermissionsPresets.restPreset,
  withMyQuotePermissions: withMyQuotePermissionsPresets.restPreset,
  withMyQuoteRequestPermissions:
    withMyQuoteRequestPermissionsPresets.restPreset,
};
export const graphqlPresets = {
  withAllBusinessUnitPermissions:
    withAllBusinessUnitPermissionsPresets.graphqlPreset,
  withAllCartPermissions: withAllCartPermissionsPresets.graphqlPreset,
  withAllOrderPermissions: withAllOrderPermissionsPresets.graphqlPreset,
  withAllQuotePermissions: withAllQuotePermissionsPresets.graphqlPreset,
  withAllQuoteRequestPermissions:
    withAllQuoteRequestPermissionsPresets.graphqlPreset,
  withMyCartPermissions: withMyCartPermissionsPresets.graphqlPreset,
  withMyOrderPermissions: withMyOrderPermissionsPresets.graphqlPreset,
  withMyQuotePermissions: withMyQuotePermissionsPresets.graphqlPreset,
  withMyQuoteRequestPermissions:
    withMyQuoteRequestPermissionsPresets.graphqlPreset,
};
export const compatPresets = {
  withAllBusinessUnitPermissions:
    withAllBusinessUnitPermissionsPresets.compatPreset,
  withAllCartPermissions: withAllCartPermissionsPresets.compatPreset,
  withAllOrderPermissions: withAllOrderPermissionsPresets.compatPreset,
  withAllQuotePermissions: withAllQuotePermissionsPresets.compatPreset,
  withAllQuoteRequestPermissions:
    withAllQuoteRequestPermissionsPresets.compatPreset,
  withMyCartPermissions: withMyCartPermissionsPresets.compatPreset,
  withMyOrderPermissions: withMyOrderPermissionsPresets.compatPreset,
  withMyQuotePermissions: withMyQuotePermissionsPresets.compatPreset,
  withMyQuoteRequestPermissions:
    withMyQuoteRequestPermissionsPresets.compatPreset,
};
