import { DiscountedTotalPricePortion } from '@commercetools/platform-sdk';
import type { TBuilder } from '../../../core';
import { TCtpDiscountedTotalPricePortion } from '../../../graphql-types';

export type TDiscountedTotalPricePortionRest = DiscountedTotalPricePortion;
export type TDiscountedTotalPricePortionGraphql =
  TCtpDiscountedTotalPricePortion;

export type TCreateDiscountedTotalPricePortionBuilder<
  TModel extends
    | TDiscountedTotalPricePortionRest
    | TDiscountedTotalPricePortionGraphql,
> = () => TBuilder<TModel>;
