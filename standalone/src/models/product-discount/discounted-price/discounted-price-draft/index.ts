import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as DiscountedPriceDraftPresets from './presets';

export const DiscountedPriceDraftRest = {
  random: RestModelBuilder,
  presets: DiscountedPriceDraftPresets.restPresets,
};

export const DiscountedPriceDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: DiscountedPriceDraftPresets.graphqlPresets,
};
