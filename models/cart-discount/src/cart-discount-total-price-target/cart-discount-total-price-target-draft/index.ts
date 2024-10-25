import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import { restPresets, graphqlPresets } from './presets';

export const CartDiscountTotalPriceTargetDraftRest = {
  random: RestModelBuilder,
  presets: restPresets,
};

export const CartDiscountTotalPriceTargetDraftGraphql = {
  random: GraphqlModelBuilder,
  presets: graphqlPresets,
};

/**
 * @deprecated Use `CartDiscountTotalPriceTargetDraftRest` or `CartDiscountTotalPriceTargetDraftGraphql` exported models instead of `CartDiscountTotalPriceTargetDraft`.
 */
export const CartDiscountTotalPriceTargetDraft = {
  random: CompatModelBuilder,
  presets: restPresets,
};
