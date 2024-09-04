import type { DiscountedLineItemPrice } from '@commercetools/platform-sdk';
import { TBuilder } from '@commercetools-test-data/core';

// https://docs.commercetools.com/api/projects/carts#discountedlineitemprice

export type TDiscountedLineItemPrice = DiscountedLineItemPrice;
export type TDiscountedLineItemPriceRest = DiscountedLineItemPrice;
export type TDiscountedLineItemPriceGraphql = DiscountedLineItemPrice & {
  __typename: 'DiscountedLineItemPrice';
};

export type TDiscountedLineItemPriceBuilder =
  TBuilder<TDiscountedLineItemPrice>;
export type TCreateDiscountedLineItemPriceBuilder =
  () => TDiscountedLineItemPriceBuilder;
