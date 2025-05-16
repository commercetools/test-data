import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as CartDiscountPatternTargetPresets from './presets';
export * from './src/cart-discount-pattern-target-draft';
export * from './types';

export const CartDiscountPatternTargetRest = {
  random: RestModelBuilder,
  presets: CartDiscountPatternTargetPresets.restPresets,
};

export const CartDiscountPatternTargetGraphql = {
  random: GraphqlModelBuilder,
  presets: CartDiscountPatternTargetPresets.graphqlPresets,
};
