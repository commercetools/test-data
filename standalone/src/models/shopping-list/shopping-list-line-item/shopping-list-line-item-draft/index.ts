import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as modelPresets from './presets';

export const ShoppingListLineItemDraftRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const ShoppingListLineItemDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};
