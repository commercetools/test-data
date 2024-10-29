import { RestModelBuilder, GraphqlModelBuilder } from './builders';
export * from './discounted-price-draft';
export * from './types';

export const DiscountedPriceRest = {
  random: RestModelBuilder,
};

export const DiscountedPriceGraphql = {
  random: GraphqlModelBuilder,
};
