import { RestModelBuilder, GraphqlModelBuilder } from './builders';
import { restPresets, graphqlPresets } from './presets';

export {
  CartDiscountTotalPriceTargetDraftGraphql,
  CartDiscountTotalPriceTargetDraftRest,
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
