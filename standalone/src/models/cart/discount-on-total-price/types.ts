import { DiscountOnTotalPrice } from '@commercetools/platform-sdk';
import type { TBuilder } from '../../../core';
import { TCtpDiscountOnTotalPrice } from '../../../graphql-types';

export type TDiscountOnTotalPriceRest = DiscountOnTotalPrice;
export type TDiscountOnTotalPriceGraphql = TCtpDiscountOnTotalPrice;

export type TCreateDiscountOnTotalPriceBuilder<
  TModel extends TDiscountOnTotalPriceRest | TDiscountOnTotalPriceGraphql,
> = () => TBuilder<TModel>;
