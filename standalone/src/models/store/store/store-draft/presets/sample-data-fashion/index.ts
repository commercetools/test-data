import { store01Rest, store01Graphql, store01 } from './store-01';
import { store02Rest, store02Graphql, store02 } from './store-02';
import { store03Rest, store03Graphql, store03 } from './store-03';

export const restPresets = {
  store01: store01Rest,
  store02: store02Rest,
  store03: store03Rest,
};

export const graphqlPresets = {
  store01: store01Graphql,
  store02: store02Graphql,
  store03: store03Graphql,
};

export const compatPresets = {
  store01: store01,
  store02: store02,
  store03: store03,
};
