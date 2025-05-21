import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as DiscountOnTotalPricePresets from './presets';

export const DiscountOnTotalPriceRest = {
  random: RestModelBuilder,
  presets: DiscountOnTotalPricePresets.restPresets,
};

export const DiscountOnTotalPriceGraphql = {
  random: GraphqlModelBuilder,
  presets: DiscountOnTotalPricePresets.graphqlPresets,
};
