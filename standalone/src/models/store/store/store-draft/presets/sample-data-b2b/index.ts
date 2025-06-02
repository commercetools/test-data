import { deFrUk, deFrUkRest, deFrUkGraphql } from './de-fr-uk';
import defaultStore from './default-store';
import spain from './spain';
import usLargeCustomers from './us-large-customers';
import usMediumCustomers from './us-medium-customers';

const presets = {
  deFrUk,
  spain,
  usLargeCustomers,
  usMediumCustomers,
  defaultStore,
};

export const restPresets = {
  deFrUk: deFrUkRest,
};

export const graphqlPresets = {
  deFrUk: deFrUkGraphql,
};

export const compatPresets = {
  deFrUk: deFrUk,
};
export default presets;
