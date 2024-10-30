import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import { restPresets, graphqlPresets } from './presets';

export const CartDiscountCustomLineItemsTargetDraftRest = {
  random: RestModelBuilder,
  presets: restPresets,
};

export const CartDiscountCustomLineItemsTargetDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: graphqlPresets,
};

/**
 * @deprecated Use `CartDiscountCustomLineItemsTargetDraftRest` or `CartDiscountCustomLineItemsTargetDraftGraphql` exported models instead of `CartDiscountCustomLineItemsTargetDraft`.
 */
export const CartDiscountCustomLineItemsTargetDraft = {
  random: CompatModelBuilder,
  presets: restPresets,
};
