import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as DiscountedLineItemPricePresets from './presets';
export * from './types';

export const DiscountedLineItemPriceRest = {
  random: RestModelBuilder,
  presets: DiscountedLineItemPricePresets.restPresets,
};

export const DiscountedLineItemPriceGraphql = {
  random: GraphqlModelBuilder,
  presets: DiscountedLineItemPricePresets.graphqlPresets,
};
