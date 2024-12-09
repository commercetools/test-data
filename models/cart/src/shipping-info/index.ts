import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as ShippingInfoPresets from './presets';
export * from './types';

export const ShippingInfoRest = {
  random: RestModelBuilder,
  presets: ShippingInfoPresets.restPresets,
};

export const ShippingInfoGraphql = {
  random: GraphqlModelBuilder,
  presets: ShippingInfoPresets.graphqlPresets,
};
