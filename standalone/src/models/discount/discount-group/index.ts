import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as DiscountGroupPresets from './presets';
export * from './discount-group-draft';
export * from './types';

export const DiscountGroupRest = {
  random: RestModelBuilder,
  presets: DiscountGroupPresets.restPresets,
};

export const DiscountGroupGraphql = {
  random: GraphqlModelBuilder,
  presets: DiscountGroupPresets.graphqlPresets,
};
