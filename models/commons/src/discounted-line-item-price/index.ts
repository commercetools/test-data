import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as DiscountedLineItemPricePresets from './presets';

export const DiscountedLineItemPriceRest = {
  random: RestModelBuilder,
  presets: DiscountedLineItemPricePresets.restPresets,
};

export const DiscountedLineItemPriceGraphql = {
  random: GraphqlModelBuilder,
  presets: DiscountedLineItemPricePresets.graphqlPresets,
};
