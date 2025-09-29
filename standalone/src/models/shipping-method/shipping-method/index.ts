import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export * as ShippingMethodDraft from './shipping-method-draft';
export * from './types';

// New specialized builders
export const ShippingMethodRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const ShippingMethodGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `ShippingMethodRest` or `ShippingMethodGraphql` exported models instead of `ShippingMethod`.
 */
export const ShippingMethod = {
  random: CompatModelBuilder,
  presets: modelPresets.compatPresets,
};
