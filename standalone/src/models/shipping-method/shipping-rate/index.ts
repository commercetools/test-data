import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as presets from './presets';

export * from './types';

export const ShippingRateRest = {
  random: RestModelBuilder,
  presets: presets.restPresets,
};

export const ShippingRateGraphql = {
  random: GraphqlModelBuilder,
  presets: presets.graphqlPresets,
};

/**
 * @deprecated Use `ShippingRateRest` or `ShippingRateGraphql` exported models instead of `ShippingRate`.
 */
export const ShippingRate = {
  random: CompatModelBuilder,
  presets: presets.compatPresets,
};
