import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as DiscountedPricePresets from './presets';
export * from './discounted-price-draft';
export * from './types';

export const DiscountedPriceRest = {
  random: RestModelBuilder,
  presets: DiscountedPricePresets.restPresets,
};

export const DiscountedPriceGraphql = {
  random: GraphqlModelBuilder,
  presets: DiscountedPricePresets.graphqlPresets,
};
