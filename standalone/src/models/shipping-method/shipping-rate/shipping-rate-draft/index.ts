import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as modelPresets from './presets';
export * from './types';

export const ShippingRateDraftRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const ShippingRateDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};
