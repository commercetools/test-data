import { GraphqlModelBuilder } from './builders';
import * as CartDiscountPatternTargetDraftPresets from './presets';

export const CartDiscountPatternTargetDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: CartDiscountPatternTargetDraftPresets.graphqlPresets,
};
