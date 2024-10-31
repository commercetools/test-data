import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import { restPresets, graphqlPresets } from './presets';

export const CartDiscountTotalPriceTargetDraftRest = {
  random: RestModelBuilder,
  presets: restPresets,
};

export const CartDiscountTotalPriceTargetDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: graphqlPresets,
};
