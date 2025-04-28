import { DiscountedLineItemPriceForQuantity } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';
import { TCtpDiscountedLineItemPriceForQuantity } from '@commercetools-test-data/graphql-types';

export type TDiscountedLineItemPriceForQuantityRest =
  DiscountedLineItemPriceForQuantity;
export type TDiscountedLineItemPriceForQuantityGraphql =
  TCtpDiscountedLineItemPriceForQuantity;

export type TCreateDiscountedLineItemPriceForQuantityBuilder<
  TModel extends
    | TDiscountedLineItemPriceForQuantityRest
    | TDiscountedLineItemPriceForQuantityGraphql,
> = () => TBuilder<TModel>;
