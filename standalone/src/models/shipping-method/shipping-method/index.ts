import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as presets from './presets';

export * from './types';

export const ShippingMethodRest = {
  random: RestModelBuilder,
  presets: presets.restPresets,
};

export const ShippingMethodGraphql = {
  random: GraphqlModelBuilder,
  presets: presets.graphqlPresets,
};

/**
 * @deprecated Use `ShippingMethodRest` or `ShippingMethodGraphql` exported models instead of `ShippingMethod`.
 */
export const ShippingMethod = {
  random: CompatModelBuilder,
  presets: presets.compatPresets,
};
