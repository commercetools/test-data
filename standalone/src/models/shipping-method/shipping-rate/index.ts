import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';

export * from './types';

/**
 * @deprecated Use `ShippingRateRest` or `ShippingRateGraphql` exported models instead of `ShippingRate`.
 */
export const ShippingRate = {
  random: CompatModelBuilder,
};

export const ShippingRateRest = {
  random: RestModelBuilder,
};

export const ShippingRateGraphql = {
  random: GraphqlModelBuilder,
};
