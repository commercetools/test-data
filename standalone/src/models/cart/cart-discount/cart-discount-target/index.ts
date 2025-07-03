import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as constants from './constants';
import * as CartDiscountTargetPresets from './presets';

export const CartDiscountTargetRest = {
  constants,
  random: RestModelBuilder,
  presets: CartDiscountTargetPresets.restPresets,
};

export const CartDiscountTargetGraphql = {
  constants,
  random: GraphqlModelBuilder,
  presets: CartDiscountTargetPresets.graphqlPresets,
};
