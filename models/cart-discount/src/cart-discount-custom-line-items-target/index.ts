import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import { restPresets, graphqlPresets } from './presets';

export {
  CartDiscountCustomLineItemsTargetDraftGraphql,
  CartDiscountCustomLineItemsTargetDraftRest,
} from './cart-discount-custom-line-items-target-draft';
export type {
  TCartDiscountCustomLineItemsTargetDraftGraphql,
  TCartDiscountCustomLineItemsTargetDraftRest,
  TCartDiscountCustomLineItemsTargetGraphql,
  TCartDiscountCustomLineItemsTargetRest,
} from './types';

export const CartDiscountCustomLineItemsTargetRest = {
  random: RestModelBuilder,
  presets: restPresets,
};

export const CartDiscountCustomLineItemsTargetGraphql = {
  random: GraphqlModelBuilder,
  presets: graphqlPresets,
};
