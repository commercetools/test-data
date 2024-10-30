import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import { restPresets, graphqlPresets } from './presets';

export {
  CartDiscountMultiBuyCustomLineItemsTargetDraftGraphql,
  CartDiscountMultiBuyCustomLineItemsTargetDraftRest,
  CartDiscountMultiBuyCustomLineItemsTargetDraft,
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

/**
 * @deprecated Use `CartDiscountMultiBuyCustomLineItemsTargetRest` or `CartDiscountMultiBuyCustomLineItemsTargetGraphql` exported models instead of `CartDiscountMultiBuyCustomLineItemsTarget`.
 */
export const CartDiscountMultiBuyCustomLineItemsTarget = {
  random: CompatModelBuilder,
  presets: restPresets,
};
