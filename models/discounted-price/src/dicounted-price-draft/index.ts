import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as DiscountedPricePresets from './presets';
export * from '../types';

export const DiscountedPriceDraftRest = {
  random: RestModelBuilder,
  presets: DiscountedPricePresets.restPresets,
};

export const DiscountedPriceDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: DiscountedPricePresets.graphqlPresets,
};
