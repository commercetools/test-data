import * as deFrUkPresets from './de-fr-uk';
import * as defaultChannelPresets from './default-channel';
import * as defaultWarehousePresets from './default-warehouse';
import * as euWarehousePresets from './eu-warehouse';
import * as spainPresets from './spain';
import * as usLargeCustomersPresets from './us-large-customers';
import * as usMediumCustomersPresets from './us-medium-customers';
import * as usWarehousePresets from './us-warehouse';

export const restPresets = {
  euWarehouse: euWarehousePresets.restPreset,
  defaultWarehouse: defaultWarehousePresets.restPreset,
  defaultChannel: defaultChannelPresets.restPreset,
  usMediumCustomers: usMediumCustomersPresets.restPreset,
  usWarehouse: usWarehousePresets.restPreset,
  spain: spainPresets.restPreset,
  usLargeCustomers: usLargeCustomersPresets.restPreset,
  deFrUk: deFrUkPresets.restPreset,
};

export const graphqlPresets = {
  euWarehouse: euWarehousePresets.graphqlPreset,
  defaultWarehouse: defaultWarehousePresets.graphqlPreset,
  defaultChannel: defaultChannelPresets.graphqlPreset,
  usMediumCustomers: usMediumCustomersPresets.graphqlPreset,
  usWarehouse: usWarehousePresets.graphqlPreset,
  spain: spainPresets.graphqlPreset,
  usLargeCustomers: usLargeCustomersPresets.graphqlPreset,
  deFrUk: deFrUkPresets.graphqlPreset,
};

export const compatPresets = {
  euWarehouse: euWarehousePresets.compatPreset,
  defaultWarehouse: defaultWarehousePresets.compatPreset,
  defaultChannel: defaultChannelPresets.compatPreset,
  usMediumCustomers: usMediumCustomersPresets.compatPreset,
  usWarehouse: usWarehousePresets.compatPreset,
  spain: spainPresets.compatPreset,
  usLargeCustomers: usLargeCustomersPresets.compatPreset,
  deFrUk: deFrUkPresets.compatPreset,
};
