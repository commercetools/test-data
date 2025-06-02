import { deFrUk, deFrUkRest, deFrUkGraphql } from './de-fr-uk';
import {
  defaultStore,
  defaultStoreGraphql,
  defaultStoreRest,
} from './default-store';
import { spain, spainGraphql, spainRest } from './spain';
import {
  usLargeCustomers,
  usLargeCustomersGraphql,
  usLargeCustomersRest,
} from './us-large-customers';
import {
  usMediumCustomers,
  usMediumCustomersGraphql,
  usMediumCustomersRest,
} from './us-medium-customers';

export const restPresets = {
  deFrUk: deFrUkRest,
  defaultStore: defaultStoreRest,
  spain: spainRest,
  usLargeCustomers: usLargeCustomersRest,
  usMediumCustomers: usMediumCustomersRest,
};

export const graphqlPresets = {
  deFrUk: deFrUkGraphql,
  defaultStore: defaultStoreGraphql,
  spain: spainGraphql,
  usLargeCustomers: usLargeCustomersGraphql,
  usMediumCustomers: usMediumCustomersGraphql,
};

export const compatPresets = {
  deFrUk: deFrUk,
  defaultStore: defaultStore,
  spain: spain,
  usLargeCustomers: usLargeCustomers,
  usMediumCustomers: usMediumCustomers,
};
