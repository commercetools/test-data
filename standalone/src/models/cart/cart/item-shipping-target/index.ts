import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as ItemShippingTargetPresets from './presets';

export const ItemShippingTargetRest = {
  random: RestModelBuilder,
  presets: ItemShippingTargetPresets.restPresets,
};

export const ItemShippingTargetGraphql = {
  random: GraphqlModelBuilder,
  presets: ItemShippingTargetPresets.graphqlPresets,
};
