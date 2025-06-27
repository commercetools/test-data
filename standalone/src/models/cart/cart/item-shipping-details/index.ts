import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as ItemShippingDetailsPresets from './presets';

export const ItemShippingDetailsRest = {
  random: RestModelBuilder,
  presets: ItemShippingDetailsPresets.restPresets,
};

export const ItemShippingDetailsGraphql = {
  random: GraphqlModelBuilder,
  presets: ItemShippingDetailsPresets.graphqlPresets,
};
