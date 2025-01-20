import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import * as CartDiscountPatternTargetDraftPresets from './presets';

export const CartDiscountPatternTargetDraftRest = {
  random: RestModelBuilder,
  presets: CartDiscountPatternTargetDraftPresets.restPresets,
};

export const CartDiscountPatternTargetDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: CartDiscountPatternTargetDraftPresets.graphqlPresets,
};
