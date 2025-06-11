import * as deFrUk from './de-fr-uk';
import * as defaultStore from './default-store';
import * as spain from './spain';
import * as usLargeCustomers from './us-large-customers';
import * as usMediumCustomers from './us-medium-customers';

export const restPresets = {
  deFrUk: deFrUk.restPreset,
  defaultStore: defaultStore.restPreset,
  spain: spain.restPreset,
  usLargeCustomers: usLargeCustomers.restPreset,
  usMediumCustomers: usMediumCustomers.restPreset,
};

export const graphqlPresets = {
  deFrUk: deFrUk.graphqlPreset,
  defaultStore: defaultStore.graphqlPreset,
  spain: spain.graphqlPreset,
  usLargeCustomers: usLargeCustomers.graphqlPreset,
  usMediumCustomers: usMediumCustomers.graphqlPreset,
};

export const compatPresets = {
  deFrUk: deFrUk.compatPreset,
  defaultStore: defaultStore.compatPreset,
  spain: spain.compatPreset,
  usLargeCustomers: usLargeCustomers.restPreset,
  usMediumCustomers: usMediumCustomers.compatPreset,
};
