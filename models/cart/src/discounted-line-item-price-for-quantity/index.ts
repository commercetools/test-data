import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as DiscountedLineItemPriceForQuantityPresets from './presets';
export * from './types';

export const DiscountedLineItemPriceForQuantityRest = {
  random: RestModelBuilder,
  presets: DiscountedLineItemPriceForQuantityPresets.restPresets,
};

export const DiscountedLineItemPriceForQuantityGraphql = {
  random: GraphqlModelBuilder,
  presets: DiscountedLineItemPriceForQuantityPresets.graphqlPresets,
};
