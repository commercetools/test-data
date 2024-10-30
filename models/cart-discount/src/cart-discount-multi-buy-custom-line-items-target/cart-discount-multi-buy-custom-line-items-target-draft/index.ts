import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import { restPresets, graphqlPresets } from './presets';

export const CartDiscountMultiBuyCustomLineItemsTargetDraftRest = {
  random: RestModelBuilder,
  presets: restPresets,
};

export const CartDiscountMultiBuyCustomLineItemsTargetDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: graphqlPresets,
};

/**
 * @deprecated Use `CartDiscountMultiBuyCustomLineItemsTargetDraftRest` or `CartDiscountMultiBuyCustomLineItemsTargetDraftGraphql` exported models instead of `CartDiscountMultiBuyCustomLineItemsTargetDraft`.
 */
export const CartDiscountMultiBuyCustomLineItemsTargetDraft = {
  random: CompatModelBuilder,
  presets: restPresets,
};
