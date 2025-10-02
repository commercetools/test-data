import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';

export * from './types';

export const ShippingMethodRest = {
  random: RestModelBuilder,
};

export const ShippingMethodGraphql = {
  random: GraphqlModelBuilder,
};

/**
 * @deprecated Use `ShippingMethodRest` or `ShippingMethodGraphql` exported models instead of `ShippingMethod`.
 */
export const ShippingMethod = {
  random: CompatModelBuilder,
};
