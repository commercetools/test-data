import {
  DiscountedPrice,
  DiscountedPriceDraft,
} from '@commercetools/platform-sdk';
import type { TBuilder } from '@commercetools-test-data/core';

export type TDiscountedPrice = DiscountedPrice;
export type TDiscountedPriceDraft = DiscountedPriceDraft;

export type TDiscountedPriceGraphql = TDiscountedPrice & {
  __typename: 'DiscountedPrice';
};
export type TDiscountedPriceDraftGraphql = TDiscountedPriceDraft;

export type TDiscountedPriceBuilder = TBuilder<TDiscountedPrice>;
export type TDiscountedPriceDraftBuilder = TBuilder<TDiscountedPriceDraft>;

export type TCreateDiscountedPriceBuilder = () => TDiscountedPriceBuilder;
export type TCreateDiscountedPriceDraftBuilder =
  () => TDiscountedPriceDraftBuilder;
