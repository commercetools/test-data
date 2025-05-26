import {
  CompatModelBuilder,
  RestModelBuilder,
  GraphqlModelBuilder,
} from './builder';

export * as StoreDraft from './store-draft';

export * from './types';
export const StoreRest = {
  random: RestModelBuilder,
};

export const StoreGraphql = {
  random: GraphqlModelBuilder,
};

/**
 * @deprecated Use `StoreRest` or `StoreGraphql` exported models instead of  `Store`
 */
export const Store = {
  random: CompatModelBuilder,
};
