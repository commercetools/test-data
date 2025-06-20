import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as ShippingPresets from './presets';
export * from './shipping-draft';

export const ShippingRest = {
  random: RestModelBuilder,
  presets: ShippingPresets.restPresets,
};

export const ShippingGraphql = {
  random: GraphqlModelBuilder,
  presets: ShippingPresets.graphqlPresets,
};
