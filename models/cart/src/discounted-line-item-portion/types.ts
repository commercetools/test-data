import type { DiscountedLineItemPortion } from '@commercetools/platform-sdk';
import { TCartDiscountGraphql } from '@commercetools-test-data/cart-discount';
import { TReferenceGraphql } from '@commercetools-test-data/commons';
import { TBuilder } from '@commercetools-test-data/core';

// https://docs.commercetools.com/api/projects/carts#discountedlineitemportion

export type TDiscountedLineItemPortion = DiscountedLineItemPortion;
export type TDiscountedLineItemPortionRest = DiscountedLineItemPortion;
export type TDiscountedLineItemPortionGraphql = Omit<
  DiscountedLineItemPortion,
  'discount'
> & {
  discount?: TCartDiscountGraphql;
  discountRef: TReferenceGraphql;
  __typename: 'DiscountedLineItemPortion';
};

export type TDiscountedLineItemPortionBuilder =
  TBuilder<TDiscountedLineItemPortion>;
export type TCreateDiscountedLineItemPortionBuilder =
  () => TDiscountedLineItemPortionBuilder;
