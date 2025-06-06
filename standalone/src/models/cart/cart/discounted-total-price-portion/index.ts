import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as DiscountedTotalPricePortionPresets from './presets';

export const DiscountedTotalPricePortionRest = {
  random: RestModelBuilder,
  presets: DiscountedTotalPricePortionPresets.restPresets,
};

export const DiscountedTotalPricePortionGraphql = {
  random: GraphqlModelBuilder,
  presets: DiscountedTotalPricePortionPresets.graphqlPresets,
};
