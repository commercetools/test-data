import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as constants from './constants';
import * as DiscountCodeInfoPresets from './presets';

export const DiscountCodeInfoRest = {
  constants,
  random: RestModelBuilder,
  presets: DiscountCodeInfoPresets.restPresets,
};

export const DiscountCodeInfoGraphql = {
  constants,
  random: GraphqlModelBuilder,
  presets: DiscountCodeInfoPresets.graphqlPresets,
};
