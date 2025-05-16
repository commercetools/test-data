import { DiscountedLineItemPriceForQuantity } from '@commercetools/platform-sdk';
import type { TBuilder } from '@/core';
import { TCtpDiscountedLineItemPriceForQuantity } from '@/graphql-types';

export type TDiscountedLineItemPriceForQuantityRest =
  DiscountedLineItemPriceForQuantity;
export type TDiscountedLineItemPriceForQuantityGraphql =
  TCtpDiscountedLineItemPriceForQuantity;

export type TCreateDiscountedLineItemPriceForQuantityBuilder<
  TModel extends
    | TDiscountedLineItemPriceForQuantityRest
    | TDiscountedLineItemPriceForQuantityGraphql,
> = () => TBuilder<TModel>;
