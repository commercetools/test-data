import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as DiscountedPricePresets from './presets';

export const DiscountedPriceDraftRest = {
  random: RestModelBuilder,
  presets: DiscountedPricePresets.restPresets,
};

export const DiscountedPriceDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: DiscountedPricePresets.graphqlPresets,
};
