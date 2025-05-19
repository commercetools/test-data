import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import { restPresets, graphqlPresets } from './presets';

export const CartDiscountMultiBuyCustomLineItemsTargetDraftRest = {
  random: RestModelBuilder,
  presets: restPresets,
};

export const CartDiscountMultiBuyCustomLineItemsTargetDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: graphqlPresets,
};
