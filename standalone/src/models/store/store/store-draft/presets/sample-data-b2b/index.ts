import { deFrUk, deFrUkRest, deFrUkGraphql } from './de-fr-uk';
import {
  defaultStore,
  defaultStoreGraphql,
  defaultStoreRest,
} from './default-store';
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
  defaultStore: defaultStoreRest,
};

export const graphqlPresets = {
  deFrUk: deFrUkGraphql,
  defaultStore: defaultStoreGraphql,
};

export const compatPresets = {
  deFrUk: deFrUk,
  defaultStore: defaultStore,
};

export default presets;
