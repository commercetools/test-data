import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatShoppingListDraftModelBuilder,
} from './builders';
import * as modelPresets from './presets';

export const ShoppingListDraftRest = {
  random: RestModelBuilder,
  presets: modelPresets.restPresets,
};

export const ShoppingListDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: modelPresets.graphqlPresets,
};

/**
 * @deprecated Use `ShoppingListDraftRest` or `ShoppingListDraftGraphql` exported models instead of `ShoppingListDraft`.
 */
export const ShoppingListDraft = {
  presets: modelPresets.compatPresets,
  random: CompatShoppingListDraftModelBuilder,
};
