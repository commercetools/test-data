import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import { restPresets, graphqlPresets } from './presets';

export {
  CartDiscountMultiBuyCustomLineItemsTargetDraftGraphql,
  CartDiscountMultiBuyCustomLineItemsTargetDraftRest,
} from './cart-discount-multi-buy-custom-line-items-target-draft';
export type {
  TCartDiscountMultiBuyCustomLineItemsTargetDraftGraphql,
  TCartDiscountMultiBuyCustomLineItemsTargetDraftRest,
  TCartDiscountMultiBuyCustomLineItemsTargetGraphql,
  TCartDiscountMultiBuyCustomLineItemsTargetRest,
} from './types';

export const CartDiscountMultiBuyCustomLineItemsTargetRest = {
  random: RestModelBuilder,
  presets: restPresets,
};

export const CartDiscountMultiBuyCustomLineItemsTargetGraphql = {
  random: GraphqlModelBuilder,
  presets: graphqlPresets,
};
