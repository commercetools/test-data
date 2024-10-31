import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import { restPresets, graphqlPresets } from './presets';

export const CartDiscountCustomLineItemsTargetDraftRest = {
  random: RestModelBuilder,
  presets: restPresets,
};

export const CartDiscountCustomLineItemsTargetDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: graphqlPresets,
};
