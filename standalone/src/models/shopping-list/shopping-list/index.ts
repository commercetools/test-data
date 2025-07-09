import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatShoppingListModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export const ShoppingListRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const ShoppingListGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `ShoppingListRest` or `ShoppingListGraphql` exported models instead of `ShoppingList`.
 */
export const ShoppingList = {
  random: CompatShoppingListModelBuilder,
  presets: modelPresets.compatPresets,
};
