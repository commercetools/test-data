import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as DiscountedLineItemPortionPresets from './presets';
export * from './discounted-line-item-portion-draft';

export const DiscountedLineItemPortionRest = {
  random: RestModelBuilder,
  presets: DiscountedLineItemPortionPresets.restPresets,
};

export const DiscountedLineItemPortionGraphql = {
  random: GraphqlModelBuilder,
  presets: DiscountedLineItemPortionPresets.graphqlPresets,
};
