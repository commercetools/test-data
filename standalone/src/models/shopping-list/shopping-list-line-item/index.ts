import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as modelPresets from './presets';

export const ShoppingListLineItemRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const ShoppingListLineItemGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};
