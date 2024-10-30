import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import { restPresets, graphqlPresets } from './presets';

export {
  CartDiscountCustomLineItemsTargetDraftGraphql,
  CartDiscountCustomLineItemsTargetDraftRest,
  CartDiscountCustomLineItemsTargetDraft,
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

/**
 * @deprecated Use `CartDiscountCustomLineItemsTargetRest` or `CartDiscountCustomLineItemsTargetGraphql` exported models instead of `CartDiscountCustomLineItemsTargetTarget`.
 */
export const CartDiscountCustomLineItemsTarget = {
  random: CompatModelBuilder,
  presets: restPresets,
};
