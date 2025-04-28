import { DiscountedLineItemPrice } from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';
import { TCtpDiscountedLineItemPrice } from '@commercetools-test-data/graphql-types';

export type TDiscountedLineItemPriceRest = DiscountedLineItemPrice;
export type TDiscountedLineItemPriceGraphql = TCtpDiscountedLineItemPrice;

export type TCreateDiscountedLineItemPriceBuilder<
  TModel extends TDiscountedLineItemPriceRest | TDiscountedLineItemPriceGraphql,
> = () => TBuilder<TModel>;
