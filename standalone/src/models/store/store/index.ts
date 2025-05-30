import {
  CompatModelBuilder,
  RestModelBuilder,
  GraphqlModelBuilder,
} from './builder';

export * from './types';

export * from './store-draft';

export const StoreRest = {
  random: RestModelBuilder,
};

export const StoreGraphql = {
  random: GraphqlModelBuilder,
};

export const StoreDraftGraphql = {
  random: GraphqlModelBuilder,
};

/**
 * @deprecated Use `StoreRest` or `StoreGraphql` exported models instead of  `Store`
 */
export const Store = {
  random: CompatModelBuilder,
};
