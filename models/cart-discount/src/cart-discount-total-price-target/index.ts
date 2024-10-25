import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatModelBuilder,
} from './builders';
import { restPresets, graphqlPresets } from './presets';

export {
  CartDiscountTotalPriceTargetDraftGraphql,
  CartDiscountTotalPriceTargetDraftRest,
  CartDiscountTotalPriceTargetDraft,
} from './cart-discount-total-price-target-draft';
export type {
  TCartDiscountTotalPriceTargetDraftGraphql,
  TCartDiscountTotalPriceTargetDraftRest,
  TCartDiscountTotalPriceTargetGraphql,
  TCartDiscountTotalPriceTargetRest,
} from './types';

export const CartDiscountTotalPriceTargetRest = {
  random: RestModelBuilder,
  presets: restPresets,
};

export const CartDiscountTotalPriceTargetGraphql = {
  random: GraphqlModelBuilder,
  presets: graphqlPresets,
};

/**
 * @deprecated Use `CartDiscountTotalPriceTargetRest` or `CartDiscountTotalPriceTargetGraphql` exported models instead of `CartDiscountTotalPriceTarget`.
 */
export const CartDiscountTotalPriceTarget = {
  random: CompatModelBuilder,
  presets: restPresets,
};
